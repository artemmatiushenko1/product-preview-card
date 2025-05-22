import * as aws from '@pulumi/aws';
import { PUBLIC_KEY_NAME, PUBLIC_KEY } from './constats';

// Створення SSH ключа
const keyPair = new aws.ec2.KeyPair(PUBLIC_KEY_NAME, { publicKey: PUBLIC_KEY });

const iamUser = new aws.iam.User('ec2-user');

const iamAccessKey = new aws.iam.AccessKey('ec2-user-key', {
  user: iamUser.name,
});

export const accessKeyId = iamAccessKey.id;
export const secretAccessKey = iamAccessKey.secret;

// Створення Security Group
const securityGroup = new aws.ec2.SecurityGroup('my-security-group', {
  description: 'Allow SSH and HTTP',
  ingress: [
    {
      fromPort: 22,
      toPort: 22,
      protocol: 'tcp',
      cidrBlocks: ['0.0.0.0/0'], // Дозволити підключення по SSH з будь-якої IP-адреси
    },
    {
      fromPort: 80,
      toPort: 80,
      protocol: 'tcp',
      cidrBlocks: ['0.0.0.0/0'], // Дозволити HTTP доступ
    },
  ],
  egress: [
    {
      fromPort: 0,
      toPort: 0,
      protocol: '-1', // Дозволити весь вихідний трафік
      cidrBlocks: ['0.0.0.0/0'],
    },
  ],
});

// Створення EC2 інстансу
const ec2Instance = new aws.ec2.Instance('my-ec2-instance', {
  ami: 'ami-04f7a54071e74f488',
  instanceType: 't2.micro',
  keyName: keyPair.keyName,
  securityGroups: [securityGroup.name],
  tags: {
    Name: 'MyEC2Instance',
  },
  userData: `#!/bin/bash
  sudo apt install docker.io -y
  `,
});

export const publicIp = ec2Instance.publicIp;
export const publicDns = ec2Instance.publicDns;
