import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const siteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY ?? '';
const secretKey = import.meta.env.PUBLIC_RECAPTCHA_SECRET_KEY ?? '';
const endpoint = import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? '';
const email = import.meta.env.PUBLIC_EMAIL ?? '';

const inputClass =
  'w-full rounded-[10px] border border-white bg-white p-2.5 text-base text-black focus:outline-none';

function ContactFormInner() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!executeRecaptcha) {
      toast.error('No se encontró el reCAPTCHA, actualice la página');
      return;
    }

    try {
      const token = await executeRecaptcha('submit_form');
      const formData = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        secret_key: secretKey,
        token,
        addressee: email,
        asunto: `Contacto desde la web - de: ${data.name}`,
      };

      const response = await axios.post(endpoint, formData);

      if (response.data.success) {
        toast.success('Gracias por consultar, te responderemos a la brevedad');
        reset();
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const responseData = error.response.data as {
          errors?: Record<string, string>;
          message?: string;
        };

        if (responseData.errors) {
          const firstError = Object.values(responseData.errors)[0];
          if (firstError) toast.warning(firstError);
        } else if (responseData.message) {
          toast.error(error.message);
        }
      }
    }
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-full flex-col gap-5 md:max-w-[600px]"
      >
        <h3 className="text-lg text-white">Escribinos</h3>

        <input
          type="text"
          placeholder="Nombre y apellido*"
          className={inputClass}
          {...register('name', { required: true })}
        />
        <input
          type="email"
          placeholder="Email*"
          className={inputClass}
          {...register('email', { required: true })}
        />
        <input
          type="text"
          placeholder="Teléfono*"
          className={inputClass}
          {...register('phone', { required: true })}
        />
        <textarea
          placeholder="Consulta*"
          className={`${inputClass} h-[150px] resize-none`}
          {...register('message', { required: true })}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="cursor-pointer shadow shadow-black/50 rounded bg-[#1976d2] px-4 py-2 text-sm font-semibold uppercase text-white transition-opacity hover:opacity-90"
          >
            ENVIAR
          </button>
        </div>
      </form>
    </>
  );
}

export default function ContactForm() {
  if (!siteKey) {
    return (
      <p className="text-sm text-white/80">
        Formulario no disponible: falta configurar PUBLIC_RECAPTCHA_SITE_KEY.
      </p>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <ContactFormInner />
    </GoogleReCaptchaProvider>
  );
}
