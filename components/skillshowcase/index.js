import React from "react";
import Container from "../index";

function SkillShowcase() {
  return (
    <div>
      <h1 className="text-4xl tracking-tight flex justify-center align-items-center m-8 font-extrabold sm:text-5xl md:text-6xl">
        <div className="block xl:inline text-lightViolet">Skills</div>
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <p className="py-5 lg:font-semibold">
            <div className="block text-lightViolet text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl">
              Frontend
            </div>
            <div className="mt-2">
              Mainly Revolves around{" "}
              <span className="font-extrabold">Vanilla JS </span> (for quick
              tasks) and <span className="font-extrabold">React</span> (Ah, got
              to love the Declarative API and the beauty of the Reconciliation
              Algorithm). I have great respect towards
              <span className="font-extrabold"> Next.js </span>(with which this
              website is built) and the team behind it because of its
              prerendering and other jaw-dropping features. I use{" "}
              <span className="font-extrabold">Webpack</span> as my module
              bundler mainly because of its extensibility. Other significant
              libraries include <span className="font-extrabold">Redux </span>{" "}
              and <span className="font-extrabold">React Router</span> for
              building React applications in a better way and several UI
              Libraries like <span className="font-extrabold">Bootstrap</span>,
              <span className="font-extrabold">Semantic-UI</span>,{" "}
              <span className="font-extrabold">Tailwind</span>,
              <span className="font-extrabold">Material-UI</span> etc. out of
              which <span className="font-extrabold">Tailwind</span> would be my
              pick of the choice because of its simplicity. I have a hand of
              experience with <span className="font-extrabold">Gulp</span> task
              runner while working with some of the projects.
            </div>
          </p>
        </div>
        <div>
          <p className="py-5 lg:font-semibold">
            <div className="block text-lightViolet text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl">
              Backend
            </div>
            <div className="mt-2">
              <span className="font-extrabold">Node.js</span> is my primary
              choice when it comes to building backend systems. My curiosity
              towards its asynchrounous nature spawned interest towards it and
              its newer sibling Deno.
              <span className="font-extrabold">Python</span> would be my second
              language of choice (Not a fan of the GIL implementation). I tend
              to use Flask along with uwsgi.{" "}
              <span className="font-extrabold">Nginx</span> would be my
              preferred server in general (you guessued it right!, async!). I
              use <span className="font-extrabold">AWS</span> for building my
              most backend infrastructure and I have a seprate section for that
              (👇). I have worked with
              <span className="font-extrabold"> DynamoDB (🤩)</span>,
              <span className="font-extrabold">MongoDB</span> and{" "}
              <span className="font-extrabold">MySQL</span> databases.
            </div>
          </p>
        </div>
        <div>
          <p className="py-5 lg:font-semibold">
            <div className="block text-lightViolet text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl">
              Cloud
            </div>
            <div className="mt-2">
              I am a big fan of the Cloud. The very thought of it makes me
              smile. My present organization uses
              <span className="font-extrabold"> Amazon Web Services</span> as
              the cloud platform and also provides training on the same. I have
              extensively worked on various AWS services like{" "}
              <span className="font-extrabold">EC2</span> for hosting,
              <span className="font-extrabold"> S3</span> for object storage,
              <span className="font-extrabold">DynamoDB</span> and{" "}
              <span className="font-extrabold">RDS </span>for database,{" "}
              <span className="font-extrabold">Cognito</span> for
              user-management, access-control and authentication,{" "}
              <span className="font-extrabold">SQS</span> for a simple messaging
              queue ,<span className="font-extrabold"> SES </span>for sending
              emails, API gateway for building REST APIs and many more.{" "}
              <span className="font-extrabold">AWS Cloudformation</span> is a
              service which has drastically improved my delivery speed and
              control (It lets you write entire cloud infrastructure as code
              i.e. IaC). I have used the{" "}
              <span className="font-extrabold">AWS SAM</span> framework (for
              building serverless applications) for IaC where I have worked with{" "}
              <span className="font-extrabold">AWS Lambda</span> (serverless)
              and other auxilliary services like DynamoDB, SQS etc.
            </div>
          </p>
        </div>
        <button
          className="mt-5"
          style={{
            backgroundColor: "#212529",
            color: "white",
            padding: "10px",
            display: "block",
          }}
        >
          <i className="fab fa-github mx-2" />
          <a href="https://github.com/prashanthwagle" target="_blank">
            Checkout my Github readme page for a quick overview of my skills
          </a>
        </button>
      </div>
    </div>
  );
}

export default SkillShowcase;
