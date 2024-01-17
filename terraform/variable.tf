variable "region" {
    description = "AWS region"
    type = string
    default = "ap-south-1" 
}

variable "key-pair" {
    description = "key pair value to ssh into instance"
    type = string
    default = "aws-key-1"
}

variable "instance-name" {
    description = "name of ec2 instance"
    type = string
    default = "Jenkins Server"
}