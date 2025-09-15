import Result from "../models/Result.js";
import User from "../models/User.js";
import generateCertificate from "../utils/certificateGenerator.js";


export const getResult = async (req, res) => {
  try {
    const { resultId } = req.params;
    const result = await Result.findByPk(resultId, { include: User });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCertificate = async (req, res) => {
  try {
    const { resultId } = req.params;
    const result = await Result.findByPk(resultId, { include: User });
    if (!result) return res.status(404).json({ error: "Result not found" });

    const pdfStream = await generateCertificate(
      result.User.name,
      `Quiz ${result.quizId}`,
      result.score
    );

    res.setHeader("Content-Type", "application/pdf");
    pdfStream.pipe(res);
    pdfStream.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
