# Any file to PDF converter
Most file types to PDF converter service. Uses libreoffice for most convertions.

## Deployment
Assure port 5000 is not being used.

1. Build the docker image:
```bash
docker build . -t topdf
```
2. Run the image via:
```bash
docker run -d -p 5000:5000 --rm --name topdf topdf
```

## Usage 
