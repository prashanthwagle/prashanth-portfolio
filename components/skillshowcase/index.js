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
              Node.js is my primary choice when it comes to building backend
              systems. My curiosity towards its asynchrounous nature spawned
              interest towards it and its newer sibling Deno. Python would be my
              second language of choice (Not a fan of the GIL implementation). I
              tend to use Flask along with uwsgi. Nginx would be my preferred
              server in general (you guessued it right!, async!). I have worked
              with DynamoDB (🤩), MongoDB and MySQL databases.
            </div>
          </p>
        </div>
        <div>
          <p className="py-5 lg:font-semibold">
            <div className="block text-lightViolet text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl">
              Cloud
            </div>
            <div className="mt-2">
              Big fan of the Cloud. The very thought of it makes me smile. I
              have extensively worked on various AWS services like EC2 for
              hosting, S3 for object storage, DynamoDB and RDS for database,
              Cognito for user-management and authentication, SQS for a simple
              queue, SES for sending emails, API gateway for building REST APIs
              and many more. AWS Cloudformation is a service which has
              drastically improved my delivery speed and control (It lets you
              write entire cloud infrastructure as code i.e. IaC). I have used
              the AWS SAM framework (for building serverless applications) for
              IaC where I have worked with AWS Lambda (serverless) and other
              auxilliary services like DynamoDB, SQS etc.
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
