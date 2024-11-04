import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Box } from "@mui/material";

import {
  StyledTextFieldForm,
  StyledErrorMessage,
} from "@/styles/components/styles";
/* Interface */
import { KeyBoardEnterFormInterface } from "@/interfaces/components";
const KeyBoardEnterForm: React.FC<KeyBoardEnterFormInterface> = ({
  initialValues,
  validationSchema,
  handleSubmit,
  placeHolder,
  disabled,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Field name="alphanumeric" style={{ width: "100%" }}>
              {({ field, form }: any) => (
                <StyledTextFieldForm
                  {...field}
                  label={placeHolder}
                  variant="filled"
                  error={Boolean(
                    form.errors.alphanumeric && form.touched.alphanumeric
                  )}
                  helperText={<StyledErrorMessage name="alphanumeric" />}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                  disabled={disabled}
                  sx={{
                    backgroundColor: "transparent",
                  }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              )}
            </Field>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default KeyBoardEnterForm;
