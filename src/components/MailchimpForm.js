import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "../components/Newsletter";

export const MailchimpForm = () => {
  const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=63c9018794cf6a0aab591ac77&amp;id=0d3cbd745d&amp;f_id=00f1c1e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}