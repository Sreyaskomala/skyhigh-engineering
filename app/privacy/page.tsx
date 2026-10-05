import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy information" };
export default function Privacy() {
  return (
    <main id="main">
      <article className="section legal">
        <p className="eyebrow">PRIVACY INFORMATION</p>
        <h1>Your project details.</h1>
        <h2>Preparing a brief</h2>
        <p>
          When you download a project brief, the text file is created in your
          browser. The download action does not send your form details to
          Skyhigh Engineering. Keep the downloaded file secure, and share it
          only with the people you choose.
        </p>
        <h2>Sending an enquiry</h2>
        <p>
          When online enquiry delivery is available and you choose to send an
          enquiry, the name, email address, optional phone number, project
          location, selected solution and requirements you provide are
          transmitted to our enquiry email service to help respond to your
          request. Required information is marked on the form. Please do not
          include sensitive personal information.
        </p>
        <h2>Technical information</h2>
        <p>
          The hosting provider may process technical request information, such
          as IP addresses and browser details, to deliver and protect the
          website. The website does not include advertising trackers or
          analytics scripts.
        </p>
        <h2>Your choices</h2>
        <p>
          You can browse the solution pages without submitting a brief. If you
          have sent an enquiry, you can reply to the resulting correspondence to
          ask about the information you provided.
        </p>
      </article>
    </main>
  );
}
