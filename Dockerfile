FROM golang:latest as build

WORKDIR /app

COPY go.mod ./

RUN go mod download

COPY main.go .

COPY static ./static

# buils the binary of app named "main"
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

FROM scratch

# Copy "main" binary into current dir
COPY --from=build /app/main .
COPY . ./static

EXPOSE 3000

CMD ["./main"]