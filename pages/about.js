import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Card from "react-bootstrap/Card";

export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/listings/3042637`)
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { listing: data } });
      });
  });
}

export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer: Irish Banga" />
      <Card>
        <Card.Body>
          <p>
            Hi, this is Irish, a second-year computer programming student at
            Seneca College. This app is part of my web development course
            covering Next/React.js, and Bootstrap.
            <br />
            <br />
            Having recently wrapped up my co-op term as a QA Automation
            Developer, I am most excited about automated testing via Jest and
            Cypress that follows in the subsequent weeks. In QA automation
            projects, I have utilized Java, Selenium, TestNG, and Maven to
            automate test cases for web applications. I have also experimented
            with Mocha, Chai and Postman in independent projects.
            <br />
            <br />
            Listing : <Link href="/listing/3042637">{props.listing.name}</Link>
          </p>
        </Card.Body>
        <ListingDetails listing={props.listing} />
      </Card>
      <br />
    </>
  );
}
