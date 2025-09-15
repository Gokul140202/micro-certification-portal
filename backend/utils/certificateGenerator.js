import PDFDocument from 'pdfkit';

const generateCertificate = (name, quizTitle, score, res) => {
  const doc = new PDFDocument();


  res.setHeader('Content-Disposition', 'attachment; filename=certificate.pdf');
  res.setHeader('Content-Type', 'application/pdf');


  doc.fontSize(25).text('Certificate of Achievement', { align: 'center' });
  doc.moveDown();
  doc.fontSize(18).text(`This is to certify that ${name} has successfully completed`, { align: 'center' });
  doc.text(`${quizTitle} with a score of ${score}%`, { align: 'center' });

 
  doc.pipe(res);
  doc.end();
};

export default generateCertificate;
