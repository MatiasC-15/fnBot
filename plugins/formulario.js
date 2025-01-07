const handler = async (m, {conn}) => {
  m.reply(global.formu);
};
handler.command = /^(formulario|formu)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.formulario = `
LLENAR FORMULARIO

𝑵𝑰𝑪𝑲 𝑭𝑭:
𝑵𝑶𝑴𝑩𝑹𝑬:
𝑬𝑫𝑨𝑫:
𝑹𝑶𝑳𝑳:
𝑹𝑬𝑮𝑰𝑶𝑵:
𝑫𝑰𝑺𝑷𝑶𝑵𝑰𝑩𝑰𝑳𝑰𝑫𝑨𝑫:
𝑪𝑨𝑴𝑩𝑰𝑶 𝑫 𝑵𝑰𝑪𝑲:
𝑴𝑶𝑽𝑰𝑳 𝑶 𝑷𝑪:

𝑵𝑶𝑻𝑨: recuerda una vez hayas pasado el formulario se te hará unas pruebas en Vv2 y scrims.
`;
