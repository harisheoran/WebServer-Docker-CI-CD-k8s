output "ec2-instance-ip" {
    description = "IP address of ec2 instance"
    value = aws_instance.pipline-server.public_ip
}