- [1. Transmission Control Protocol](#1-transmission-control-protocol)
- [2. Simple Mail Transfer Protocol](#2-simple-mail-transfer-protocol)
- [3. IP Address](#3-ip-address)
- [4. Firewalls](#4-firewalls)
- [5. Paging and Segmentation](#5-paging-and-segmentation)
- [6. Indexing in Database](#6-indexing-in-database)
- [7. Operating System](#7-operating-system)
  

## 1. Transmission Control Protocol

| Question                                                                                                                                                          | Answer                                     |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| TCP is one of the basic standards that define the rules of the internet. Which organisation defines these standards?                                              | Internet Engineering Task Force (IETF)     |
| Name three protocols which use TCP protocol to transmit data.                                                                                                     | FTP, SSH and Telnet                        |
| Which other protocol is used to establish low-latency connections between applications and decrease transmissions time. It is considered to be alternative of TCP | User Datagram Protocol                     |
| What are four main layers of TCP/IP model?                                                                                                                        | Datalink, Internet, Transport, Application |
| We send data packets over TCP.Is it safe or unsafe to send private data using public Wi-fi?                                                                       | Unsafe                                     |

## 2. Simple Mail Transfer Protocol
| Question                                                                                                                                     | Answer                           |
|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Which protocol is used for sending mail to over the internet ?                                                                               | SMTP                             |
| Which protocols are used for retrieving emails ?                                                                                             | POP and IMAP                     |
| A set of commands that authenticates and directs the transfer of mail is called ?                                                            | SMTP                             |
| What is the general address of smtp server which is used in gmail ?                                                                          | smtp.gmail.com                   |
| Which protocol is used by SMTP ?                                                                                                             | TCP                              |
| If we assume that the email of receiver exists, then what guarantees delivery of email ?                                                     | TCP                              |
| Which SMTP extension allows the email to be relayed to the recipients after they have been authenticated ?                                   | ODMR (On Demand Mail Relay)      |
| What is the full form of IMAP ?                                                                                                              | Internet Message Access Protocol |
| ____ allows its users to organize their available emails on the server. ___ downloads the mail first and then allows its users to read them. | IMAP, POP3                       |

## 3. IP Address
|Question|Answer|
| --- | --- |
|Every device has to have ____ for communication purposes on internet | IP Address|
|IP Address consists of two parts. Name them. | A Network Address and a Host Address|
|Name types of IP address | IPv4 and IPv6 |
|Which IP address is 32 bit numeric address written as four numbers separated by periods ?| IPv4|
|How many unique addresses are possible in IPv4 ? | 4.2 billion|
|Which IP address is 128-bit hexadecimal (both numbers and alphabets) address | IPv6|
|How many unique address are possible in IPv6 ? |340 undecillion addresses(36 digits after 340)|
|Each hexadecimal character in IPv6 represents ___ bits ? | 4 bits|

## 4. Firewalls
|Question|Answer|
| --- | --- |
Firewall can stop users from accessing malicious websites. True / False| False|
Next Generation Firewall (NGFW) was invented by | Palo Alto Networks|
If a computer is running without firewall, it is giving ___ access to other networks| Open|
Firewall comes in both software and hardware. True or False. |True|
A hardware firewall is a physical device that attaches between a computer network and gateway. Give an example of hardware firewall.| Broadband Router|
Firewalls are primarily used for preventing ___ attacks. Additionally, they can help in blocking application-layer attacks.|Malware and Network based|

## 5. Paging and Segmentation
|Question|Answer|
| --- | --- |
|The technique in which we donot load any page in the main memory until it is required. We keep all the pages of the frames in the secondary memory. This technique is called ?| Demand Paging|
|If page is not present in main memory when it is referred, it is called ___.| Page Fault|
|If CPU spend so much time on just reading the pages from the secondary memory, then effective time taken by CPU to read one word fro the secondary memory is too high. This concept is called ?| Thrashing|
|Which concept is used in Demand Paging ? |Lazy Swapper Concept|
____ is the arrangement of memory management. According to it, the logical address space is a collection of segments. - Segmentation.
|Name two types of segments | Virtual Memory Segmentation and Simple Segmentation|
|What is the main advantage of Segmentation ? | No Internal Fragmentation|
|According to __________, in order to execute any process, it not necessary that the whole process should present in the main memory at the given time. |Virtual Memory|
|The process in which Operation System guesss in advance which page the process will require and pre-loads them into the memory.| Pre-paging|

## 6. Indexing in Database
|Question|Answer|
| --- | --- |
|____ is a way to optimize the performance of a database by minimizing the number of disk accesses required when a query is processed.| Indexing|
|Name two database columns which are created in process of indexing .| Search Key and Data Reference|
|Name two types of index used in Sequential File Organization or Ordered Index File | Dense Index and Sparse Index|

## 7. Operating System
|Question|Answer|
| --- | --- |
|______ specifies an instance of high paging activity. This happens when it is spending more time paging instead of executing.|Thrashing|
|______ makes a process to be larger than the amount of memory allocated to it. It ensures that only important instructions and data at any given time are kept in memory. | Overlays|
|_____ specifies the address which is generated by the CPU whereas physical address specifies to the address which is seen by the memory unit. | Logical Address|
|_____ is a technique used to avoid the starvation in resource scheduling system. |Aging|
|_____ is resource management problem. In this problem, a waiting process does not get the resources it needs for a long time because the resources are being allocated to other processes. | Starvation|
|Belady's Anomaly is also called ______.| FIFO Anomaly|
|_____ takes only 0 and 1 as value and used to implement mutual exclusion and synchronize concurrent processes. |Binary Semaphore|
|_______ is a protected variable or abstract data type that is used to lock the resource being used. The value of the semaphore indicates the status of a common resource. | Semaphore|
|_______ are the built-in part of the operating system while external commands are the separate file programs that are stored in a separate folder or directory.| Internal Commands|
|______ is a process in which data is temporarily gathered to be used and executed by a device, program or the system. It is associated with printing. When different applications send output to the printer at the same time, _____ keeps these all jobs into a disk file and queues them accordingly to the printer.| Spooling|
|______ is occurred when we deal with the systems that have fixed size allocation units. |Internal Fragmentation |
|______ is occurred when we deal with systems that have variable-size allocation units. | External Fragmentation|
|_________ is a phenomenon of memory wastage. It reduces the capacity and performance because space is used inefficiently. |Fragmentation|
|______ space specifies the address that is generated by CPU. On the other hand ______ space specifies the address that is seen by the memory unit.| Logical Address, Physical Address|
|__________ is used to avoid deadlock. It is the one of deadlock-avoidance method. It is named as __________ on the banking system where bank never allocates available cash in such a manner that it can no longer satisfy the requirements of all of its customers.| Banker’s Algorithm|
|__________ is a specific situation or condition where two processes are waiting for each other to complete so that they can start. But this situation causes hang for both of them.| Deadlock|
|_____ stands for Redundant Array of Independent Disks. It is used to store the same data redundantly to improve the overall performance.| RAID|
|SMP stands for ___________. It is the most common type of multiple processor system. In SMP, each processor runs an identical copy of the operating system, and these copies communicate with one another when required.| Symmetreic Multi Processing|
|A _____ is a basic unit of CPU utilization It consists of a thread ID, program counter, register set and a stack. | Thread|
|_______ is a phenomenon in virtual memory scheme when the processor spends most of its time in swapping pages, rather than executing instructions.| Thrashing|
|________ is a very useful memory management technique which enables processes to execute outside of memory. This technique is especially used when an executing program cannot fit in the physical memory. | Virtual Memory|
|________ specifies that if an area of memory is not currently being used, it is swapped to disk to make room for an application's need. | Demand Paging|
|Which technique is used to solve the external fragmentation problem in operating system. This technique ensures that the data you need is available as quickly as possible. |Paging|
