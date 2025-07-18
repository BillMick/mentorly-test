// import jwt from 'jsonwebtoken';

export async function sendConfirmationEmail({ id, email, fullName }: { id: string, email: string, fullName: string }) {
  //   Generate token
  // const token = jwt.sign(
  //   {
  //     sub: id,
  //     email,
  //     type: 'email_verification',
  //   },
  //   jwtSecret,
  //   { expiresIn: '24h' }
  // );

  // const verificationLink = `${frontendUrl}/verify-email?token=${token}`;

  // Send email via external Gmail server
  const sendRes = await fetch('http://localhost:5001/send-verification-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
      email: email
      // link: verificationLink,
    }),
  });

  if (!sendRes.ok) {
    const error = await sendRes.json();
    throw new Error(error.message || 'Erreur lors de l\'inscription');
  }
  return sendRes.json();
}


// import nodemailer from 'nodemailer';
// import jwt from 'jsonwebtoken';

// export async function sendConfirmationEmail({ id, email, fullName }: { id: string, email: string, fullName: string }) {
//   const jwtSecret = process.env.JWT_SECRET as string;
//   const frontendUrl = process.env.FRONTEND_URL || 'http://192.168.1.156:8080';

//   // Generate token
//   const token = jwt.sign(
//     {
//       sub: id,
//       email,
//       type: 'email_verification',
//     },
//     jwtSecret,
//     { expiresIn: '24h' }
//   );

//   const verificationLink = `${frontendUrl}/verify-email?token=${token}`;

//   // Create transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS, // App password
//     },
//   });

//   // Email content
//   const mailOptions = {
//     from: process.env.GMAIL_USER,
//     to: email,
//     subject: 'Vérifiez votre adresse email',
//     html: `
//       <p>Bonjour ${fullName},</p>
//       <p>Merci de vous être inscrit. Veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse email :</p>
//       <p><a href="${verificationLink}">${verificationLink}</a></p>
//       <p>Ce lien expirera dans 24 heures.</p>
//     `,
//   };

//   // Send email
//   await transporter.sendMail(mailOptions);
// } 