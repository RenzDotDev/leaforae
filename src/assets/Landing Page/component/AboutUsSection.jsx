import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function AboutUsSection() {
  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_auto] sm:grid-cols-2 h-fit gap-3 p-3 lg:max-h-screen">
      <ImageSection />
      <AboutUsTextSection />
    </div>
  );
}

export default AboutUsSection;

function ImageSection() {
  return (
    <section className="h-full w-full overflow-hidden rounded-2xl">
      <img
        src="/aboutUsSectionImage.jpg"
        alt=""
        className="h-full w-full object-cover"
      />
    </section>
  );
}

function AboutUsTextSection() {
  return (
    <section className="flex flex-col gap-2 h-fit">
      <h1 className="text-center text-[clamp(2rem,calc(3vw+1rem),3rem)] font-semibold">
        Why <span className="text-darkGreen">choose</span> us?
      </h1>
      <CustomAccordion
        title={"Hand-Selected Plant"}
        description={
          "Every plant is carefully grown and inspected to ensure it arrives fresh, vibrant, and ready to thrive in your home."
        }
      />
      <CustomAccordion
        title={"Wide Variety"}
        description={
          "From low-maintenance indoor greens to unique statement plants, we offer options for beginners and seasoned plant lovers alike."
        }
      />
      <CustomAccordion
        title={"Eco Packaging"}
        description={
          "We pack our plants securely with sustainable materials, keeping them safe in transit while reducing environmental impact."
        }
      />
      <CustomAccordion
        title={"Local & Trusted"}
        description={
          "As a community-based shop, we provide fast delivery, personalized service, and the reliability you can count on."
        }
      />
    </section>
  );
}

function CustomAccordion({ title, description }) {
  return (
    <Accordion className="h-fit !shadow-none">
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography component="span">
          <p className="text-darkGreen font-semibold text-md">{title}</p>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
