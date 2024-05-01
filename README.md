# QRCode-Generator

Serverless QRCode Generator Application

## Usage

Generate a QRCode through URL.

### Parameters

`data` - required

`size` (default 200)

`colorLight` (default, #fff)

`colorDark` (default, #000)

`margin` (default, 0.5)

### Example

`https://xxxx.cloudfront/?data=hello+world`

![Hello World](example/example01.png)

`https://xxxx.cloudfront/?data=hello+world&colorLight=f00&colorDark=fff`

![Hello World](example/example02.png)

`https://xxxx.cloudfront/?data=hello+world&colorLight=50f&colorDark=000&margin=2`

![Hello World](example/example03.png)