var questions = [

{
  question: "1.Which network device operates at Layer 2 of the OSI model?",
  options: ["Router", "Hub", "Switch", "Firewall"],
  answer: "Switch"
},

{
  question: "2.Which command-line tool is used to test network connectivity between two IP hosts?",
  options: ["ping", "tracert", "nslookup", "netstat"],
  answer: "ping"
},

{
  question: "3.What is the default subnet mask for a Class C IP address?",
  options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
  answer: "255.255.255.0"
},

{
  question: "4.Which routing protocol is classified as a link-state routing protocol?",
  options: ["RIP", "OSPF", "EIGRP", "BGP"],
  answer: "OSPF"
},

{
  question: "5.Which TCP/IP protocol is responsible for assigning IP addresses dynamically to network devices?",
  options: ["DNS", "DHCP", "ARP", "ICMP"],
  answer: "DHCP"
},

{
  question: "6.Which network topology requires the most cabling?",
  options: ["Bus", "Star", "Ring", "Mesh"],
  answer: "Mesh"
},

{
  question: "7.What is the default port number for HTTPS traffic?",
  options: ["80", "443", "21", "25"],
  answer: "443"
},

{
  question: "8.What is the purpose of NAT (Network Address Translation)?",
  options: ["To translate domain names to IP addresses", "To provide secure remote access to a network", "To assign IP addresses dynamically", "To translate private IP addresses to public IP addresses"],
  answer: "To translate private IP addresses to public IP addresses"
},

{
  question: "9.Which protocol is used to convert domain names into IP addresses?",
  options: ["FTP", "DNS", "SNMP", "DHCP"],
  answer: "DNS"
},

{ question: "10.What protocol is used to convert domain names into IP addresses?",
 options: ["FTP", "DNS", "SNMP", "DHCP"],
  answer: "DNS"
},

{
  question: "11.Which type of attack floods a network with excessive traffic, causing it to become unavailable?",
  options: ["DoS (Denial of Service)", "DDoS (Distributed Denial of Service)", "SQL injection", "Cross-site scripting"],
  answer: "DDoS (Distributed Denial of Service)"
},

{
  question: "12.What is the purpose of a VLAN (Virtual Local Area Network)?",
  options: ["To isolate network traffic", "To provide wireless network access", "To assign IP addresses dynamically", "To establish secure connections between networks"],
  answer: "To isolate network traffic"
},

{
  question: "13.Which subnet mask would be used to create 8 subnets from a Class C IP address?",
  options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.128"],
  answer: "255.255.255.128"
},

{
  question: "14.Which network device operates at Layer 3 of the OSI model and makes routing decisions based on IP addresses?",
  options: ["Switch", "Hub", "Router", "Bridge"],
  answer: "Router"
},

{
  question: "15.Which protocol is used to send email messages from a mail client to a mail server?",
  options: ["FTP", "SSH", "SMTP", "Telnet"],
  answer: "SMTP"
},

{
  question: "16.What is the purpose of a proxy server in network security?",
  options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide wireless network access"],
  answer: "To filter and control network traffic"
},

{
  question: "17.Which wireless standard operates in the 2.4 GHz frequency range and offers the best signal penetration through walls and obstacles?",
  options: ["802.11a", "802.11g", "802.11n", "802.11ac"],
  answer: "802.11g"
},

{
  question: "18.What is the purpose of a network gateway?",
  options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide access between different networks"],
  answer: "To provide access between different networks"
},

{
  question: "19.Which protocol is used to securely transfer files between a client and a server over a network?",
  options: ["FTP", "SFTP", "POP3", "IMAP"],
  answer: "SFTP"
},

{
  question: "20.What is the maximum number of hosts that can be addressed in a Class B network?",
  options: ["256", "65,536", "16,777,216", "4,294,967,296"],
  answer: "16,777,216"
},

{
  question: "21.Which wireless standard operates in the 5 GHz frequency range and provides improved signal stability and performance?",
  options: ["802.11a", "802.11b", "802.11g", "802.11ac"],
  answer: "802.11ac"
},

{
  question: "22.What is the purpose of a network proxy?",
  options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide wireless network access"],
  answer: "To filter and control network traffic"
},

{
  question: "23.Which protocol is used to resolve IP addresses to MAC addresses in IPv4?",
  options: ["DNS", "DHCP", "ARP", "ICMP"],
  answer: "ARP"
},

{
  question: "24.What is the purpose of a network hub?",
  options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide a central point for connecting network devices"],
  answer: "To provide a central point for connecting network devices"
},

{
  question: "25.Which wireless encryption standard is considered the most secure and recommended for use?",
  options: ["WEP", "WPA", "WPA2", "WPA3"],
  answer: "WPA2"
},

{
  question: "26.What is the maximum transmission speed of a T1 line?",
  options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
  answer: "10 Mbps"
},

{
  question: "27.Which protocol is used to remotely monitor and manage network devices?",
  options: ["FTP", "SSH", "SNMP", "Telnet"],
  answer: "SNMP"
},

{
  question: "28.What is the purpose of a load balancer in networking?",
  options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To distribute network traffic across multiple servers", "To filter and control network traffic"],
  answer: "To distribute network traffic across multiple servers"
},

{
  question: "29.Which wireless standard operates in the 2.4 GHz frequency range and offers the highest data rates?",
  options: ["802.11a", "802.11g", "802.11n", "802.11ac"],
  answer: "802.11ac"
},

{
  question: "30.What is the maximum transmission speed of a T2 line?",
  options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
  answer: "100 Mbps"
},

{
  question: "31.Which protocol is used to securely transfer email messages from a mail client to a mail server?",
  options: ["FTP", "SSH", "SMTP", "Telnet"],
  answer: "SMTP"
},

{
    question: "32. Which protocol is used to dynamically assign IP addresses to network devices in IPv6?",
    options: [
        "A) DNS",
        "B) ARP",
        "C) ICMPv6",
        "D) DHCPv6"
    ],
    answer: "D) DHCPv6"
},
{
    question: "33. What is the maximum number of hosts that can be addressed in a Class C network?",
    options: [
        "A) 256",
        "B) 65,536",
        "C) 16,777,216",
        "D) 4,294,967,296"
    ],
    answer: "A) 256"
},
{
    question: "34. Which wireless standard operates in the 5 GHz frequency range and offers the best signal quality and performance?",
    options: [
        "A) 802.11a",
        "B) 802.11b",
        "C) 802.11g",
        "D) 802.11ac"
    ],
    answer: "D) 802.11ac"
},
{
    question: "35. What is the maximum transmission speed of a T3 line?",
    options: [
        "A) 10 Mbps",
        "B) 100 Mbps",
        "C) 1 Gbps",
        "D) 10 Gbps"
    ],
    answer: "C) 1 Gbps"
},
{
    question: "36. Which protocol is used to securely transfer files between a client and a server over a network?",
    options: [
        "A) FTP",
        "B) SFTP",
        "C) POP3",
        "D) IMAP"
    ],
    answer: "B) SFTP"
},
{
    question: "37. What is the purpose of a network gateway?",
    options: [
        "A) To assign IP addresses dynamically",
        "B) To establish secure connections between networks",
        "C) To filter and control network traffic",
        "D) To provide access between different networks"
    ],
    answer: "D) To provide access between different networks"
},
{
    question: "38. Which protocol is used to convert domain names into IP addresses?",
    options: [
        "A) FTP",
        "B) DNS",
        "C) SNMP",
        "D) DHCP"
    ],
    answer: "B) DNS"
},
{
    question: "39. What is the purpose of a VLAN (Virtual Local Area Network)?",
    options: [
        "A) To isolate network traffic",
        "B) To provide wireless network access",
        "C) To assign IP addresses dynamically",
        "D) To establish secure connections between networks"
    ],
    answer: "A) To isolate network traffic"
},
{
    question: "30. Which subnet mask would be used to create 8 subnets from a Class C IP address?",
    options: [
        "A) 255.0.0.0",
        "B) 255.255.0.0",
        "C) 255.255.255.0",
        "D) 255.255.255.128"
    ],
    answer: "D) 255.255.255.128"
},
{
    question: "31. Which network device operates at Layer 3 of the OSI model and makes routing decisions based on IP addresses?",
    options: [
        "A) Switch",
        "B) Hub",
        "C) Router",
        "D) Bridge"
    ],
    answer: "C) Router"
},
{
    question: "32. Which protocol is used to send email messages from a mail client to a mail server?",
    options: [
        "A) FTP",
        "B) SSH",
        "C) SMTP",
        "D) Telnet"
    ],
    answer: "C) SMTP"
},
{
    question: "33. What is the purpose of a proxy server in network security?",
    options: [
        "A) To assign IP addresses dynamically",
        "B) To establish secure connections between networks",
        "C) To filter and control network traffic",
        "D) To provide wireless network access"
    ],
    answer: "C) To filter and control network traffic"
},
{
    question: "34. Which wireless standard operates in the 2.4 GHz frequency range and offers the best signal penetration through walls and obstacles?",
    options: [
        "A) 802.11a",
        "B) 802.11g",
        "C) 802.11n",
        "D) 802.11ac"
    ],
    answer: "B) 802.11g"
},
{
    question: "35. What is the purpose of a network gateway?",
    options: [
        "A) To assign IP addresses dynamically",
        "B) To establish secure connections between networks",
        "C) To filter and control network traffic",
        "D) To provide access between different networks"
    ],
    answer: "D) To provide access between different networks"
},
{
    question: "36. Which protocol is used to securely transfer files between a client and a server over a network?",
    options: [
        "A) FTP",
        "B) SFTP",
        "C) POP3",
        "D) IMAP"
    ],
    answer: "B) SFTP"
},
{
    question: "37. What is the maximum number of hosts that can be addressed in a Class B network?",
    options: [
        "A) 256",
        "B) 65,536",
        "C) 16,777,216",
        "D) 4,294,967,296"
    ],
    answer: "C) 16,777,216"
},
{
    question: "38. Which wireless standard operates in the 5 GHz frequency range and provides improved signal stability and performance?",
    options: [
        "A) 802.11a",
        "B) 802.11b",
        "C) 802.11g",
        "D) 802.11ac"
    ],
    answer: "D) 802.11ac"
},
{
    question: "39. What is the purpose of a network proxy?",
    options: [
        "A) To assign IP addresses dynamically",
        "B) To establish secure connections between networks",
        "C) To filter and control network traffic",
        "D) To provide wireless network access"
    ],
    answer: "C) To filter and control network traffic"
},
{
    question: "40. Which protocol is used to resolve IP addresses to MAC addresses in IPv4?",
    options: [
        "A) DNS",
        "B) DHCP",
        "C) ARP",
        "D) ICMP"
    ],
    answer: "C) ARP"
},

{
    question: "Que stion 41: What is the purpose of a network hub?",
    options: [
      "A) To assign IP addresses dynamically",
      "B) To establish secure connections between networks",
      "C) To filter and control network traffic",
       "D) To provide a central point for connecting network devices"
     ],
     answer: "D) To provide a central point for connecting network devices"
},

{
  question: "Question 42: Which wireless encryption standard is considered the most secure and recommended for use?",
  options: [
    "A) WEP",
    "B) WPA",
    "C) WPA2",
    "D) WPA3"
  ],
  answer: "C) WPA2"
},
{
  question: "Question 43: What is the maximum transmission speed of a T1 line?",
  options: [
    "A) 10 Mbps",
    "B) 100 Mbps",
    "C) 1 Gbps",
    "D) 10 Gbps"
  ],
  answer: "A) 10 Mbps"
},
{
  question: "Question 44: Which protocol is used to remotely monitor and manage network devices?",
  options: [
    "A) FTP",
    "B) SSH",
    "C) SNMP",
    "D) Telnet"
  ],
  answer: "C) SNMP"
},
{
  question: "Question 45: What is the purpose of a load balancer in networking?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To distribute network traffic across multiple servers",
    "D) To filter and control network traffic"
  ],
  answer: "C) To distribute network traffic across multiple servers"
},
{
  question: "Question 46: Which wireless standard operates in the 2.4 GHz frequency range and offers the highest data rates?",
  options: [
    "A) 802.11a",
    "B) 802.11g",
    "C) 802.11n",
    "D) 802.11ac"
  ],
  answer: "D) 802.11ac"
},
{
  question: "Question 47: What is the maximum transmission speed of a T2 line?",
  options: [
    "A) 10 Mbps",
    "B) 100 Mbps",
    "C) 1 Gbps",
    "D) 10 Gbps"
  ],
  answer: "B) 100 Mbps"
},
{
  question: "Question 48: Which protocol is used to securely transfer email messages from a mail client to a mail server?",
  options: [
    "A) FTP",
    "B) SSH",
    "C) SMTP",
    "D) Telnet"
  ],
  answer: "C) SMTP"
},

{
  question: "Question 49: What is the purpose of a network firewall in network security?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To filter and control network traffic",
    "D) To provide wireless network access"
  ],
  answer: "C) To filter and control network traffic"
},

{
    question: "Question 50: Which protocol is used to dynamically assign IP addresses to network devices in IPv6?",
    options: ["DNS", "ARP", "ICMPv6", "DHCPv6"],
    answer: "DHCPv6"
},

{
    question: "Question 51: What is the maximum number of hosts that can be addressed in a Class C network?",
    options: ["256", "65,536", "16,777,216", "4,294,967,296"],
    answer: "256"
},
{
    question: "Question 52: Which wireless standard operates in the 5 GHz frequency range and offers the best signal quality and performance?",
    options: ["802.11a", "802.11b", "802.11g", "802.11ac"],
    answer: "802.11ac"
},
{
    question: "Question 53: What is the maximum transmission speed of a T3 line?",
    options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
    answer: "1 Gbps"
},
{
    question: "Question 54: Which protocol is used to securely transfer files between a client and a server over a network?",
    options: ["FTP", "SFTP", "POP3", "IMAP"],
    answer: "SFTP"
},
{
    question: "Question 55: What is the purpose of a network gateway?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide access between different networks"],
    answer: "To provide access between different networks"
},
{
    question: "Question 56: Which protocol is used to convert domain names into IP addresses?",
    options: ["FTP", "DNS", "SNMP", "DHCP"],
    answer: "DNS"
},
{
    question: "Question 57: What is the purpose of a VLAN (Virtual Local Area Network)?",
    options: ["To isolate network traffic", "To provide wireless network access", "To assign IP addresses dynamically", "To establish secure connections between networks"],
    answer: "To isolate network traffic"
},
{
    question: "Question 58: Which subnet mask would be used to create 8 subnets from a Class C IP address?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.128"],
    answer: "255.255.255.128"
},
{
    question: "Question 59: Which network device operates at Layer 3 of the OSI model and makes routing decisions based on IP addresses?",
    options: ["Switch", "Hub", "Router", "Bridge"],
    answer: "Router"
},
{
    question: "Question 60: Which protocol is used to send email messages from a mail client to a mail server?",
    options: ["FTP", "SSH", "SMTP", "Telnet"],
    answer: "SMTP"
},
{
    question: "Question 61: What is the purpose of a proxy server in network security?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide wireless network access"],
    answer: "To filter and control network traffic"
},
{
    question: "Question 62: Which wireless standard operates in the 2.4 GHz frequency range and offers the best signal penetration through walls and obstacles?",
    options: ["802.11a", "802.11g", "802.11n", "802.11ac"],
   

 answer: "802.11g"
},
{
    question: "Question 63: What is the purpose of a network gateway?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide access between different networks"],
    answer: "To provide access between different networks"
},
{
    question: "Question 64: Which protocol is used to securely transfer files between a client and a server over a network?",
    options: ["FTP", "SFTP", "POP3", "IMAP"],
    answer: "SFTP"
},
{
    question: "Question 65: What is the maximum number of hosts that can be addressed in a Class B network?",
    options: ["256", "65,536", "16,777,216", "4,294,967,296"],
    answer: "16,777,216"
},
{
    question: "Question 66: Which wireless standard operates in the 5 GHz frequency range and provides improved signal stability and performance?",
    options: ["802.11a", "802.11b", "802.11g", "802.11ac"],
    answer: "802.11ac"
},
{
    question: "Question 67: What is the purpose of a network proxy?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide wireless network access"],
    answer: "To filter and control network traffic"
},
{
    question: "Question 68: Which protocol is used to resolve IP addresses to MAC addresses in IPv4?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    answer: "ARP"
},
{
    question: "Question 69: What is the purpose of a network hub?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide a central point for connecting network devices"],
    answer: "To provide a central point for connecting network devices"
},
{
    question: "Question 70: Which wireless encryption standard is considered the most secure and recommended for use?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    answer: "WPA2"
},
{
    question: "Question 71: What is the maximum transmission speed of a T1 line?",
    options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
    answer: "10 Mbps"
},
{
    question: "Question 72: Which protocol is used to remotely monitor and manage network devices?",
    options: ["FTP", "SSH", "SNMP", "Telnet"],
    answer: "SNMP"
},
{
    question: "Question 73: What is the purpose of a load balancer in networking?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To distribute network traffic across multiple servers", "To filter and control network traffic"],
    answer: "To distribute network traffic across multiple servers"
},
{
    question: "Question 74: Which wireless standard operates in the 2.4 GHz frequency range and offers the highest data rates?",
    options: ["802.11a", "802.11g", "802.11n", "802.11ac"],
    answer: "802.11ac"
},

{
    question: "Question 75: What is the maximum transmission speed of a T2 line?",
    options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
    answer: "100 Mbps"
},

{
    question: "Question 76: Which protocol is used to securely transfer email messages from a mail client to a mail server?",
    options: ["FTP", "SSH", "SMTP", "Telnet"],
    answer: "SMTP"
},
{
    question: "Question 77: What is the purpose of a network firewall in network security?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide wireless network access"],
    answer: "To filter and control network traffic"
},
{
    question: "Question 78: Which protocol is used to dynamically assign IP addresses to network devices in IPv6?",
    options: ["DNS", "ARP", "ICMPv6", "DHCPv6"],
    answer: "DHCPv6"
},
{
    question: "Question 79: What is the maximum number of hosts that can be addressed in a Class C network?",
    options: ["256", "65,536", "16,777,216", "4,294,967,296"],
    answer: "256"
},
{
    question: "Question 80: Which wireless standard operates in the 5 GHz frequency range and offers the best signal quality and performance?",
    options: ["802.11a", "802.11b", "802.11g", "802.11ac"],
    answer: "802.11ac"
},

{
    question: "Question 81: What is the maximum transmission speed of a T3 line?",
    options: ["A) 10 Mbps", "B) 100 Mbps", "C) 1 Gbps", "D) 10 Gbps"],
    answer: "C) 1 Gbps"
},

{
    question: "Question 82: Which protocol is used to securely transfer files between a client and a server over a network?",
    options: ["A) FTP", "B) SFTP", "C) POP3", "D) IMAP"],
    answer: "B) SFTP"
},

{
    question: "Question 83: What is the purpose of a network gateway?",
    options: ["A) To assign IP addresses dynamically", "B) To establish secure connections between networks", "C) To filter and control network traffic", "D) To provide access between different networks"],
    answer: "D) To provide access between different networks"
},

{
    question: "Question 84: Which protocol is used to convert domain names into IP addresses?",
    options: ["A) FTP", "B) DNS", "C) SNMP", "D) DHCP"],
    answer: "B) DNS"
},

{
    question: "Question 85: What is the purpose of a VLAN (Virtual Local Area Network)?",
    options: ["A) To isolate network traffic", "B) To provide wireless network access", "C) To assign IP addresses dynamically", "D) To establish secure connections between networks"],
    answer: "A) To isolate network traffic"
},

{
    question: "Question 86: Which subnet mask would be used to create 8 subnets from a Class C IP address?",
    options: ["A) 255.0.0.0", "B) 255.255.0.0", "C) 255.255.255.0", "D) 255.255.255.128"],
    answer: "D) 255.255.255.128"
},

{
    question: "Question 87: Which network device operates at Layer 3 of the OSI model and makes routing decisions based on IP addresses?",
    options: ["A) Switch", "B) Hub", "C) Router", "D) Bridge"],
    answer: "C) Router"
},

{
    question: "Question 88: Which protocol is used to send email messages from a mail client to a mail server?",
    options: ["A) FTP", "B) SSH", "C) SMTP", "D) Telnet"],
    answer: "C) SMTP"
},

{
    question: "Question 89: What is the purpose of a proxy server in network security?",
    options: ["A) To assign IP addresses dynamically", "B) To establish secure connections between networks", "C) To filter and control network traffic", "D) To provide wireless network access"],
    answer: "C) To filter and control network traffic"
},

{
    question: "Question 90: Which wireless standard operates in the 2.4 GHz frequency range and offers the best signal penetration through walls and obstacles?",
    options: ["A) 802.11a", "B) 802.11g", "C) 802.11n", "D) 802.11ac"],
    answer: "B) 802.11g"
},
{
  question: "91. What is the purpose of a network gateway?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To filter and control network traffic",
    "D) To provide access between different networks"
  ],
  answer: "D) To provide access between different networks"
},

{
  question: "92. What protocol is used for secure file transfer between a client and a server over a network?",
  options: [
    "A) FTP",
    "B) SFTP",
    "C) POP3",
    "D) IMAP"
  ],
  answer: "B) SFTP"
},

{
  question: "93. What is the maximum number of hosts that can be addressed in a Class B network?",
  options: [
    "A) 256",
    "B) 65,536",
    "C) 16,777,216",
    "D) 4,294,967,296"
  ],
  answer: "C) 16,777,216"
},

{
  question: "94. Which wireless standard operates in the 5 GHz frequency range and provides improved signal stability and performance?",
  options: [
    "A) 802.11a",
    "B) 802.11b",
    "C) 802.11g",
    "D) 802.11ac"
  ],
  answer: "D) 802.11ac"
},

{
  question: "95. What is the purpose of a network proxy?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To filter and control network traffic",
    "D) To provide wireless network access"
  ],
  answer: "C) To filter and control network traffic"
},

{
  question: "96. Which protocol is used to resolve IP addresses to MAC addresses in IPv4?",
  options: [
    "A) DNS",
    "B) DHCP",
    "C) ARP",
    "D) ICMP"
  ],
  answer: "C) ARP"
},

{
  question: "97. What is the purpose of a network hub?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To filter and control network traffic",
    "D) To provide a central point for connecting network devices"
  ],
  answer: "D) To provide a central point for connecting network devices"
},

{
  question: "98. Which wireless encryption standard is considered the most secure and recommended for use?",
  options: [
    "A) WEP",
    "B) WPA",
    "C) WPA2",
    "D) WPA3"
  ],
  answer: "C) WPA2"
},

{
  question: "99. What is the maximum transmission speed of a T1 line?",
  options: [
    "A) 10 Mbps",
    "B) 100 Mbps",
    "C) 1 Gbps",
    "D) 10 Gbps"
  ],
  answer: "A) 10 Mbps"
},

{
  question: "100. Which protocol is used to remotely monitor and manage network devices?",
  options: [
    "A) FTP",
    "B) SSH",
    "C) SNMP",
    "D) Telnet"
  ],
  answer: "C) SNMP"
},

{
  question: "101. What is the purpose of a load balancer in networking?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To distribute network traffic across multiple servers",
    "D) To filter and control network traffic"
  ],
  answer: "C) To distribute network traffic across multiple servers"
},

{
  question: "102. Which wireless standard operates in the 2.4 GHz frequency range and offers the highest data rates?",
  options: [
    "A) 802.11a",
    "B) 802.11g",
    "C) 802.11n",
    "D) 802.11ac"
  ],
  answer: "D) 802.11ac"
},

{
  question: "103. What is the maximum transmission speed of a T2 line?",
  options: [
    "A) 10 Mbps",
    "B) 100 Mbps",
    "C) 1 Gbps",
    "D) 10 Gbps"
  ],
  answer: "B) 100 Mbps"
},

{
  question: "104. Which protocol is used to securely transfer email messages from a mail client to a mail server?",
  options: [
    "A) FTP",
    "B) SSH",
    "C) SMTP",
    "D) Telnet"
  ],
  answer: "C) SMTP"
},

{
  question: "105. What is the purpose of a network firewall in network security?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To filter and control network traffic",
    "D) To provide wireless network access"
  ],
  answer: "C) To filter and control network traffic"
},

{
  question: "106. Which protocol is used to dynamically assign IP addresses to network devices in IPv6?",
  options: [
    "A) DNS",
    "B) ARP",
    "C) ICMPv6",
    "D) DHCPv6"
  ],
  answer: "D) DHCPv6"
},

{
  question: "107. What is the maximum number of hosts that can be addressed in a Class C network?",
  options: [
    "A) 256",
    "B) 65,536",
    "C) 16,777,216",
    "D) 4,294,967,296"
  ],
  answer: "A) 256"
},

{
  question: "108. Which wireless standard operates in the 5 GHz frequency range and offers the best signal quality and performance?",
  options: [
    "A) 802.11a",
    "B) 802.11b",
    "C) 802.11g",
    "D) 802.11ac"
  ],
  answer: "D) 802.11ac"
},

{
  question: "109. What is the maximum transmission speed of a T3 line?",
  options: [
    "A) 10 Mbps",
    "B) 100 Mbps",
    "C) 1 Gbps",
    "D) 10 Gbps"
  ],
  answer: "C) 1 Gbps"
},

{
  question: "110. Which protocol is used for secure file transfer between a client and a server over a network?",
  options: [
    "A) FTP",
    "B) SFTP",
    "C) POP3",
    "D) IMAP"
  ],
  answer: "B) SFTP"
},

{
  question: "111. What is the purpose of a network gateway?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To filter and control network traffic",
    "D) To provide access between different networks"
  ],
  answer: "D) To provide access between different networks"
},

{
  question: "112. Which protocol is used to convert domain names into IP addresses?",
  options: [
    "A) FTP",
    "B) DNS",
    "C) SNMP",
    "D) DHCP"
  ],
  answer: "B) DNS"
},

{
  question: "113. What is the purpose of a VLAN (Virtual Local Area Network)?",
  options: [
    "A) To isolate network traffic",
    "B) To provide wireless network access",
    "C) To assign IP addresses dynamically",
    "D) To establish secure connections between networks"
  ],
  answer: "A) To isolate network traffic"
},

{
  question: "114. Which subnet mask would be used to create 8 subnets from a Class C IP address?",
  options: [
    "A) 255.0.0.0",
    "B) 255.255.0.0",
    "C) 255.255.255.0",
    "D) 255.255.255.128"
  ],
  answer: "D) 255.255.255.128"
},

{
  question: "115. Which network device operates at Layer 3 of the OSI model and makes routing decisions based on IP addresses?",
  options: [
    "A) Switch",
    "B) Hub",
    "C) Router",
    "D) Bridge"
  ],
  answer: "C) Router"
},

{
  question: "116. Which protocol is used to send email messages from a mail client to a mail server?",
  options: [
    "A) FTP",
    "B) SSH",
    "C) SMTP",
    "D) Telnet"
  ],
  answer: "C) SMTP"
},

{
  question: "117. What is the purpose of a proxy server in network security?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To filter and control network traffic",
    "D) To provide wireless network access"
  ],
  answer: "C) To filter and control network traffic"
},

{
  question: "118. Which wireless standard operates in the 2.4 GHz frequency range and offers the best signal penetration through walls and obstacles?",
  options: [
    "A) 802.11a",
    "B) 802.11g",
    "C) 802.11n",
    "D) 802.11ac"
  ],
  answer: "B) 802.11g"
},

{
  question: "119. What is the purpose of a network proxy?",
  options: [
    "A) To assign IP addresses dynamically",
    "B) To establish secure connections between networks",
    "C) To filter and control network traffic",
    "D) To provide wireless network access"
  ],
  answer: "C) To filter and control network traffic"
},

{
  question: "120. Which protocol is used to resolve IP addresses to MAC addresses in IPv4?",
  options: [
    "A) DNS",
    "B) DHCP",
    "C) ARP",
    "D) ICMP"
  ],
  answer: "C) ARP"
},
{
    question: "121. What is the purpose of a network hub?",
    options: ["A) To assign IP addresses dynamically", "B) To establish secure connections between networks", "C) To filter and control network traffic", "D) To provide a central point for connecting network devices"],
    answer: "D) To provide a central point for connecting network devices"
},

{
    question: "122. Which wireless encryption standard is considered the most secure and recommended for use?",
    options: ["A) WEP", "B) WPA", "C) WPA2", "D) WPA3"],
    answer: "C) WPA2"
},

{
    question: "123. What is the maximum transmission speed of a T1 line?",
    options: ["A) 10 Mbps", "B) 100 Mbps", "C) 1 Gbps", "D) 10 Gbps"],
    answer: "A) 10 Mbps"
},

{
    question: "124. Which protocol is used to remotely monitor and manage network devices?",
    options: ["A) FTP", "B) SSH", "C) SNMP", "D) Telnet"],
    answer: "C) SNMP"
},

{
    question: "125. What is the purpose of a load balancer in networking?",
    options: ["A) To assign IP addresses dynamically", "B) To establish secure connections between networks", "C) To distribute network traffic across multiple servers", "D) To filter and control network traffic"],
    answer: "C) To distribute network traffic across multiple servers"
},

{
    question: "126. Which wireless standard operates in the 2.4 GHz frequency range and offers the highest data rates?",
    options: ["A) 802.11a", "B) 802.11g", "C) 802.11n", "D) 802.11ac"],
    answer: "D) 802.11ac"
},

{
    question: "127. What is the maximum transmission speed of a T2 line?",
    options: ["A) 10 Mbps", "B) 100 Mbps", "C) 1 Gbps", "D) 10 Gbps"],
    answer: "B) 100 Mbps"
},

{
    question: "128. Which protocol is used to securely transfer email messages from a mail client to a mail server?",
    options: ["A) FTP", "B) SSH", "C) SMTP", "D) Telnet"],
    answer: "C) SMTP"
},

{
    question: "129. What is the purpose of a network firewall in network security?",
    options: ["A) To assign IP addresses dynamically", "B) To establish secure connections between networks", "C) To filter and control network traffic", "D) To provide wireless network access"],
    answer: "C) To filter and control network traffic"
},

{
    question: "130. Which protocol is used to dynamically assign IP addresses to network devices in IPv6?",
    options: ["A) DNS", "B) ARP", "C) ICMPv6", "D) DHCPv6"],
    answer: "D) DHCPv6"
},

{
    question: "131. What is the maximum number of hosts that can be addressed in a Class C network?",
    options: ["A) 256", "B) 65,536", "C) 16,777,216", "D) 4,294,967,296"],
    answer: "A) 256"
},

{
    question: "132. Which wireless standard operates in the 5 GHz frequency range and offers the best signal quality and performance?",
   

 options: ["A) 802.11a", "B) 802.11b", "C) 802.11g", "D) 802.11ac"],
    answer: "D) 802.11ac"
},

{
    question: "133. What is the maximum transmission speed of a T3 line?",
    options: ["A) 10 Mbps", "B) 100 Mbps", "C) 1 Gbps", "D) 10 Gbps"],
    answer: "C) 1 Gbps"
},

{
    question: "134. Which protocol is used to securely transfer files between a client and a server over a network?",
    options: ["A) FTP", "B) SFTP", "C) POP3", "D) IMAP"],
    answer: "B) SFTP"
},

{
    question: "135. What is the purpose of a network gateway?",
    options: ["A) To assign IP addresses dynamically", "B) To establish secure connections between networks", "C) To filter and control network traffic", "D) To provide access between different networks"],
    answer: "D) To provide access between different networks"
},

{
    question: "136. Which protocol is used to convert domain names into IP addresses?",
    options: ["A) FTP", "B) DNS", "C) SNMP", "D) DHCP"],
    answer: "B) DNS"
},

{
    question: "137. What is the purpose of a VLAN (Virtual Local Area Network)?",
    options: ["A) To isolate network traffic", "B) To provide wireless network access", "C) To assign IP addresses dynamically", "D) To establish secure connections between networks"],
    answer: "A) To isolate network traffic"
},

{
    question: "138. Which subnet mask would be used to create 8 subnets from a Class C IP address?",
    options: ["A) 255.0.0.0", "B) 255.255.0.0", "C) 255.255.255.0", "D) 255.255.255.128"],
    answer: "D) 255.255.255.128"
},

{
    question: "139. Which network device operates at Layer 3 of the OSI model and makes routing decisions based on IP addresses?",
    options: ["A) Switch", "B) Hub", "C) Router", "D) Bridge"],
    answer: "C) Router"
},

{
    question: "140. Which protocol is used to send email messages from a mail client to a mail server?",
    options: ["A) FTP", "B) SSH", "C) SMTP", "D) Telnet"],
    answer: "C) SMTP"
},

{
    question: "141. What is the purpose of a proxy server in network security?",
    options: ["A) To assign IP addresses dynamically", "B) To establish secure connections between networks", "C) To filter and control network traffic", "D) To provide wireless network access"],
    answer: "C) To filter and control network traffic"
},

{
    question: "142. Which wireless standard operates in the 2.4 GHz frequency range and offers the best signal penetration through walls and obstacles?",
    options: ["A) 802.11a", "B) 802.11g", "C) 802.11n", "D) 802.11ac"],
    answer: "B) 802.11g"
},

{
    question: "143. What is the purpose of a network proxy?",
    options: ["A) To assign IP addresses dynamically", 
              "B) To establish secure connections between networks", 
              "C) To filter and control network traffic",
              "D) To provide wireless network access"],
    answer: "C) To filter and control network traffic"
},

{
    question: "144. Which protocol is used to resolve IP addresses to MAC addresses in IPv4?",
    options: ["A) DNS", "B) DHCP", "C) ARP", "D) ICMP"],
    answer: "C) ARP"
},

{
    question: "145. What is the purpose of a network hub?",
    options: ["A) To assign IP addresses dynamically", "B) To establish secure connections between networks", "C) To filter and control network traffic", "D) To provide a central point for connecting network devices"],
    answer: "D) To provide a central point for connecting network devices"
},

{
    question: "146. Which wireless encryption standard is considered the most secure and recommended for use?",
    options: ["A) WEP", "B) WPA", "C) WPA2", "D) WPA3"],
    answer: "C) WPA2"
},

{
    question: "147. What is the maximum transmission speed of a T1 line?",
    options: ["A) 10 Mbps", "B) 100 Mbps", "C) 1 Gbps", "D) 10 Gbps"],
    answer: "A) 10 Mbps"
},

{
    question: "148. Which protocol is used to remotely monitor and manage network devices?",
    options: ["A) FTP", "B) SSH", "C) SNMP", "D) Telnet"],
    answer: "C) SNMP"
},

{
    question: "149. What is the purpose of a load balancer in networking?",
    options: ["A) To assign IP addresses dynamically", "B) To establish secure connections between networks", "C) To distribute network traffic across multiple servers", "D) To filter and control network traffic"],
    answer: "C) To distribute network traffic across multiple servers"
},

{
    question: "150. Which wireless standard operates in the 2.4 GHz frequency range and offers the highest data rates?",
    options: ["A) 802.11a", "B) 802.11g", "C) 802.11n", "D) 802.11ac"],
    answer: "D) 802.11ac"
},

{
    question: "Question 151: What is the maximum transmission speed of a T2 line?",
    options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
    answer: "B) 100 Mbps"
},

{
    question: "Question 152: Which protocol is used to securely transfer email messages from a mail client to a mail server?",
    options: ["FTP", "SSH", "SMTP", "Telnet"],
    answer: "C) SMTP"
},

{
    question: "Question 153: What is the purpose of a network firewall in network security?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide wireless network access"],
    answer: "C) To filter and control network traffic"
},

{
    question: "Question 154: Which protocol is used to dynamically assign IP addresses to network devices in IPv6?",
    options: ["DNS", "ARP", "ICMPv6", "DHCPv6"],
    answer: "D) DHCPv6"
},

{
    question: "Question 155: What is the maximum number of hosts that can be addressed in a Class C network?",
    options: ["256", "65,536", "16,777,216", "4,294,967,296"],
    answer: "A) 256"
},

{
    question: "Question 156: Which wireless standard operates in the 5 GHz frequency range and offers the best signal quality and performance?",
    options: ["802.11a", "802.11b", "802.11g", "802.11ac"],
    answer: "D) 802.11ac"
},

{
    question: "Question 157: What is the maximum transmission speed of a T3 line?",
    options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
    answer: "C) 1 Gbps"
},

{
    question: "Question 158: Which protocol is used to securely transfer files between a client and a server over a network?",
    options: ["FTP", "SFTP", "POP3", "IMAP"],
    answer: "B) SFTP"
},

{
    question: "Question 159: What is the purpose of a network gateway?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide access between different networks"],
    answer: "D) To provide access between different networks"
},

{
    question: "Question 160: Which protocol is used to convert domain names into IP addresses?",
    options: ["FTP", "DNS", "SNMP", "DHCP"],
    answer: "B) DNS"
},

{
    question: "Question 161: What is the purpose of a VLAN (Virtual Local Area Network)?",
    options: ["To isolate network traffic", "To provide wireless network access", "To assign IP addresses dynamically", "To establish secure connections between networks"],
    answer: "A) To isolate network traffic"
},
{
    question: "Question 162: Which subnet mask would be used to create 8 subnets from a Class C IP address?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.128"],
    answer: "D) 255.255.255.128"
},

{
    question: "Question 163: Which network device operates at Layer 3 of the OSI model and makes routing decisions based on IP addresses?",
    options: ["Switch", "Hub", "Router", "Bridge"],
    answer: "C) Router"
},

{
    question: "Question 164: Which protocol is used to send email messages from a mail client to a mail server?",
    options: ["FTP", "SSH", "SMTP", "Telnet"],
    answer: "C) SMTP"
},

{
    question: "Question 165: What is the purpose of a proxy server in network security?",
    options: ["To assign IP addresses dynamically", "To establish secure connections between networks", "To filter and control network traffic", "To provide wireless network access"],
    answer: "C) To filter and control network traffic"
},

{
  question: "Question 166. What is the purpose of a network firewall in network security?",
  options: [
      "A) To assign IP addresses dynamically",
      "B) To establish secure connections between networks",
      "C) To filter and control network traffic",
      "D) To provide wireless network access"
  ],
  answer: "C) To filter and control network traffic"
},

];

