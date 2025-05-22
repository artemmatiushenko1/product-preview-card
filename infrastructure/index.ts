import * as aws from '@pulumi/aws';
import { PUBLIC_KEY_NAME, PUBLIC_KEY } from './constants';

// Створення SSH ключа
const keyPair = new aws.ec2.KeyPair(PUBLIC_KEY_NAME, { publicKey: PUBLIC_KEY });

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

const ubuntu = aws.ec2.getAmi({
  mostRecent: true,
  filters: [
    {
      name: 'name',
      values: [
        'ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-20250305',
      ],
    },
    {
      name: 'virtualization-type',
      values: ['hvm'],
    },
  ],
  owners: ['099720109477'],
});

// Створення EC2 інстансу
const ec2Instance = new aws.ec2.Instance('my-ec2-instance', {
  ami: ubuntu.then((ubuntu) => ubuntu.id),
  instanceType: aws.ec2.InstanceType.T2_Micro,
  keyName: keyPair.keyName,
  securityGroups: [securityGroup.name],
  tags: {
    Name: 'MyEC2Instance',
  },
  userData: `#!/bin/bash
  echo "Installing Docker 🔥!"
  sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
  sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
  sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
  sudo apt-cache policy docker-ce
  sudo apt install -y docker-ce
  `,
});

export const publicIp = ec2Instance.publicIp;
export const publicDns = ec2Instance.publicDns;
