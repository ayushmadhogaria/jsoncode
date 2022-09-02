import React from "react";
import JSONSchemaForm from "react-jsonschema-form";

/* schema portion */

const postSchema = {
  
  title:"Internship Form",
  type: "object",
  properties: {
    title: {
      title: "Name",
      type: "string",
    },
    job: {
      title: "Job Title",
      type:"string",
      enum:["Java Intern","Frontend Intern","QA","Software Engineer","Others"]
    },
    dateapp: {
      title: "Date applied",
      type: "string",
      format: "date-time"
    },
    citizenshipno: {
      title: "Citizenship number",
      type: "string"

    }
  },
  required: ["title", "job", "dateapp" ,"citizenshipno"]
};


export default function Form({ onSubmit }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <JSONSchemaForm onSubmit={onSubmit} schema={postSchema} />
        </div>
      </div>
    </div>
  );
}
