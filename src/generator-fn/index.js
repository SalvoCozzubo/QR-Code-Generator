import * as QRCode from 'qrcode';

const defaultValue = {
  data: '',
  width: 200,
  colorDark: '000',
  colorLight: 'fff',
  margin: 0.5,
};

async function createImage({
  data,
  width = defaultValue.width,
  colorDark = defaultValue.colorDark,
  colorLight = defaultValue.colorLight,
  margin = defaultValue.margin,
}) {
  const params = {
    type: 'png',
    width: parseInt(width, 10),
    margin,
    color: {
      dark: `#${colorDark}`,
      light: `#${colorLight}`,
    },
  };

  const result = await QRCode.toDataURL(data, params);
  return result.replace(/^data:image\/png;base64,/, '');
}

export async function handler(_event) {
  console.log(JSON.stringify(_event, null, 2));

  const {
    data, width, colorDark, colorLight, margin,
  } = _event.queryStringParameters ?? defaultValue;

  if (!data) {
    return {
      statusCode: 400,
      body: 'Data query is not valid.',
      headers: {
        'Content-Type': 'text/plain',
      },
    };
  }
  const image = await createImage({
    data, width, colorDark, colorLight, margin,
  });

  return {
    statusCode: 200,
    body: image,
    isBase64Encoded: true,
    headers: {
      'Content-Type': 'image/png',
    },
  };
}
