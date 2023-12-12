import React, { useContext, useEffect, useState, useRef } from "react";
import { Grid, Paper, Typography, Button, TextField, Box } from '@mui/material';
import { useForm } from 'react-hook-form';


const firstTypographyStyle = {
  color: "#151927",
  fontFamily: "Inter",
  fontSize: "72px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  textAlign: "center",
  marginBottom: "1rem"
};

const secondTypographyStyle = {
  color: "rgba(21, 25, 39, 0.90)",
  fontFamily: "Inter",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "138%",
  textAlign: "center",
  marginBottom: "92px"

};

const labelStyles = {
  fontFamily: "Inter",
  fontSize: "20px",
  fontStyle: "normal",
  textAlign: "left",
  fontWeight: 500,
  lineHeight: "normal",
  color: "var(--text-color, #252B42)",
  marginTop: "37px",
  marginBottom: "12px"
};

const inputStyles = {
  borderRadius: '10px',
  border: '1px solid #151927',
  background: 'rgba(21, 25, 39, 0.05)',
};

const textStyles = {
  color: '#FFF',
  fontFamily: 'Inter',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'none',
};

const Form: React.FC<{ scrollToForm: boolean }> = ({ scrollToForm }) => {

  //
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToForm && formRef.current) {
      window.scrollTo({
        top: formRef.current?.offsetTop || 0,
        behavior: 'smooth',
      });
    }
  }, [scrollToForm]);

  //
  const [form, setForm] = useState({
    fullname: '',
    socialreason: '',
    phone: '',
    field: '',
    email: '',
    link: '',
    postal: '',
    message: '',
  })
  const { fullname, socialreason, phone, field, email, link, postal, message } = form;

  // validation
  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    defaultValues: form,
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    trigger();
  };

  const fullnameValidation = errors?.fullname ? errors.fullname.message : null;
  const socialreasonValidation = errors?.socialreason ? errors.socialreason.message : null;
  const phoneValidation = errors?.phone ? errors.phone.message : null;
  const fieldValidation = errors?.field ? errors.field.message : null;
  const emailValidation = errors?.email ? errors.email.message : null;
  const linkValidation = errors?.link ? errors.link.message : null;
  const postalValidation = errors?.postal ? errors.postal.message : null;
  const messageValidation = errors?.message ? errors.message.message : null;

  //
  const HandleSubmit = (e) => {
    // e.preventDefault();
  };


  return (
    <React.Fragment>
      <Typography style={firstTypographyStyle} id="form-section">
        Rejoignez-nous !
      </Typography>
      <Typography style={secondTypographyStyle}>
        Contactez-nous et bénéficiez de notre expertise et nos offres exclusives.Une <br />
        chargée client vous rappellera de suite et répondra à vos attentes.
      </Typography>
      <Grid container justifyContent="center" alignItems="center" >
        <Grid item>
          <Paper
            style={{
              width: 1405,
              height: 1113,
              flexShrink: 0,
              borderRadius: 50,
              border: '3px solid #151927',
              background: 'rgba(21, 25, 39, 0.02)',
            }}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Box component="form" noValidate onSubmit={handleSubmit(HandleSubmit)}
                sx={{ mt: "55px", ml: "118px", mr: "118px", mb: "" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography style={labelStyles}>Nom & Prénom</Typography>
                    <TextField
                      placeholder="Votre Nom et Prénom"
                      name="fullname"
                      required
                      fullWidth
                      id="fullname"
                      autoFocus
                      style={inputStyles}
                      {...register("fullname", { required: "Full Name is required" })}
                      error={!!errors?.fullname}
                      helperText={errors?.fullname?.message}
                      value={form.fullname}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography style={labelStyles}>Raison sociale</Typography>
                    <TextField
                      required
                      fullWidth
                      id="socialreason"
                      name="socialreason"
                      placeholder="Raison sociale de votre entreprise"
                      style={inputStyles}
                      {...register("socialreason", { required: "Social Reason is required" })}
                      error={!!errors?.socialreason}
                      helperText={errors?.socialreason?.message}
                      value={form.socialreason}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography style={labelStyles}>Numéro de téléphone</Typography>
                    <TextField
                      name="phone"
                      required
                      fullWidth
                      id="phone"
                      type="Number"
                      placeholder="Votre numéro de téléphone "
                      autoFocus
                      style={inputStyles}
                      {...register("phone", { required: "Phone is required" })}
                      error={!!errors?.phone}
                      helperText={errors?.phone?.message}
                      value={form.phone}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography style={labelStyles}>Domaine d’activité</Typography>
                    <TextField
                      required
                      fullWidth
                      id="field"
                      name="field"
                      placeholder="Exemple : Cosmétique, vêtements, accessoires, électroniques, etc."
                      style={inputStyles}
                      {...register("field", { required: "Field is required" })}
                      error={!!errors?.field}
                      helperText={errors?.field?.message}
                      value={form.field}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography style={labelStyles}>Adresse E-mail</Typography>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      name="email"
                      placeholder="Votre adresse mail"
                      type="email"
                      style={inputStyles}
                      {...register("email", { required: "Email is required" })}
                      error={!!errors?.email}
                      helperText={errors?.email?.message}
                      value={form.email}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography style={labelStyles}>Lien de réseaux sociaux</Typography>
                    <TextField
                      name="link"
                      required
                      fullWidth
                      id="link"
                      placeholder="Lien vers votre page Facebook / votre compte Instagram professionnelle ou votre site e-Commerce"
                      autoFocus
                      style={inputStyles}
                      {...register("link", { required: "Link is required" })}
                      error={!!errors?.link}
                      helperText={errors?.link?.message}
                      value={form.link}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography style={labelStyles}>Adresse postale de votre activité</Typography>
                    <TextField
                      name="postal"
                      required
                      fullWidth
                      id="postal"
                      placeholder="Adresse de votre activité"
                      autoFocus
                      style={inputStyles}
                      {...register("postal", { required: "Postal code is required" })}
                      error={!!errors?.postal}
                      helperText={errors?.postal?.message}
                      value={form.postal}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography style={labelStyles}>Message</Typography>
                    <TextField
                      name="message"
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      fullWidth
                      variant="outlined"
                      placeholder="Racontez-nous davantage à propos de votre affaire, Depuis quand vous exercez ? Que cherchez-vous à accomplir / quels sont vos objectifs? Comment pouvons-nous vous aider ? etc."
                      style={inputStyles}
                      {...register("message", { required: "Message is required" })}
                      error={!!errors?.message}
                      helperText={errors?.message?.message}
                      value={form.message}
                      onChange={onChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    width: 1168,
                    height: 90,
                    flexShrink: 0,
                    borderRadius: 10,
                    background: '#151927',
                    marginTop: "37px"
                  }}
                >
                  <Typography style={textStyles}>Soumettre</Typography>
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <br />
    </React.Fragment>
  );
}

export default Form;