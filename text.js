const beginingText = 
`
Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.[1][2] It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages. Programmers typically use high-level programming languages that are more easily intelligible to humans than machine code, which is directly executed by the central processing unit. Proficient programming usually requires expertise in several different subjects, including knowledge of the application domain, details of programming languages and generic code libraries, specialized algorithms, and formal logic.

Auxiliary tasks accompanying and related to programming include analyzing requirements, testing, debugging (investigating and fixing problems), implementation of build systems, and management of derived artifacts, such as programs' machine code. While these are sometimes considered programming, often the term software development is used for this larger overall process – with the terms programming, implementation, and coding reserved for the writing and editing of code per se. Sometimes software development is known as software engineering, especially when it employs formal methods or follows an engineering design process.

Programmable devices have existed for centuries. As early as the 9th century, a programmable music sequencer was invented by the Persian Banu Musa brothers, who described an automated mechanical flute player in the Book of Ingenious Devices.[3][4] In 1206, the Arab engineer Al-Jazari invented a programmable drum machine where a musical mechanical automaton could be made to play different rhythms and drum patterns, via pegs and cams.[5][6] In 1801, the Jacquard loom could produce entirely different weaves by changing the "program" – a series of pasteboard cards with holes punched in them.

Code-breaking algorithms have also existed for centuries. In the 9th century, the Arab mathematician Al-Kindi described a cryptographic algorithm for deciphering encrypted code, in A Manuscript on Deciphering Cryptographic Messages. He gave the first description of cryptanalysis by frequency analysis, the earliest code-breaking algorithm.[7]

The first computer program is generally dated to 1843, when mathematician Ada Lovelace published an algorithm to calculate a sequence of Bernoulli numbers, intended to be carried out by Charles Babbage's Analytical Engine.[8] However, Charles Babbage had already written his first program for the Analytical Engine in 1837.[9]

Data and instructions were once stored on external punched cards, which were kept in order and arranged in program decks.
In the 1880s, Herman Hollerith invented the concept of storing data in machine-readable form.[10] Later a control panel (plug board) added to his 1906 Type I Tabulator allowed it to be programmed for different jobs, and by the late 1940s, unit record equipment such as the IBM 602 and IBM 604, were programmed by control panels in a similar way, as were the first electronic computers. However, with the concept of the stored-program computer introduced in 1949, both programs and data were stored and manipulated in the same way in computer memory.[11]

Machine code was the language of early programs, written in the instruction set of the particular machine, often in binary notation. Assembly languages were soon developed that let the programmer specify instruction in a text format (e.g., ADD X, TOTAL), with abbreviations for each operation code and meaningful names for specifying addresses. However, because an assembly language is little more than a different notation for a machine language, two machines with different instruction sets also have different assembly languages.
High-level languages made the process of developing a program simpler and more understandable, and less bound to the underlying hardware. The first compiler related tool, the A-0 System, was developed in 1952[12] by Grace Hopper, who also coined the term 'compiler'.[13][14] FORTRAN, the first widely used high-level language to have a functional implementation, came out in 1957,[15] and many other languages were soon developed—in particular, COBOL aimed at commercial data processing, and Lisp for computer research.

These compiled languages allow the programmer to write programs in terms that are syntactically richer, and more capable of abstracting the code, making it easy to target varying machine instruction sets via compilation declarations and heuristics. Compilers harnessed the power of computers to make programming easier[15] by allowing programmers to specify calculations by entering a formula using infix notation.

Programs were mostly entered using punched cards or paper tape. By the late 1960s, data storage devices and computer terminals became inexpensive enough that programs could be created by typing directly into the computers. Text editors were also developed that allowed changes and corrections to be made much more easily than with punched cards.
Whatever the approach to development may be, the final program must satisfy some fundamental properties. The following properties are among the most important:[16] [17]

Reliability: how often the results of a program are correct. This depends on conceptual correctness of algorithms and minimization of programming mistakes, such as mistakes in resource management (e.g., buffer overflows and race conditions) and logic errors (such as division by zero or off-by-one errors).
Robustness: how well a program anticipates problems due to errors (not bugs). This includes situations such as incorrect, inappropriate or corrupt data, unavailability of needed resources such as memory, operating system services, and network connections, user error, and unexpected power outages.
Usability: the ergonomics of a program: the ease with which a person can use the program for its intended purpose or in some cases even unanticipated purposes. Such issues can make or break its success even regardless of other issues. This involves a wide range of textual, graphical, and sometimes hardware elements that improve the clarity, intuitiveness, cohesiveness and completeness of a program's user interface.
Portability: the range of computer hardware and operating system platforms on which the source code of a program can be compiled/interpreted and run. This depends on differences in the programming facilities provided by the different platforms, including hardware and operating system resources, expected behavior of the hardware and operating system, and availability of platform-specific compilers (and sometimes libraries) for the language of the source code.
Maintainability: the ease with which a program can be modified by its present or future developers in order to make improvements or to customize, fix bugs and security holes, or adapt it to new environments. Good practices[18] during initial development make the difference in this regard. This quality may not be directly apparent to the end user but it can significantly affect the fate of a program over the long term.
Efficiency/performance: Measure of system resources a program consumes (processor time, memory space, slow devices such as disks, network bandwidth and to some extent even user interaction): the less, the better. This also includes careful management of resources, for example cleaning up temporary files and eliminating memory leaks. This is often discussed under the shadow of a chosen programming language. Although the language certainly affects performance, even slower languages, such as Python, can execute programs instantly from a human perspective. Speed, resource usage, and performance are important for programs that bottleneck the system, but efficient use of programmer time is also important and is related to cost: more hardware may be cheaper.
In computer programming, readability refers to the ease with which a human reader can comprehend the purpose, control flow, and operation of source code. It affects the aspects of quality above, including portability, usability and most importantly maintainability.

Readability is important because programmers spend the majority of their time reading, trying to understand, reusing and modifying existing source code, rather than writing new source code. Unreadable code often leads to bugs, inefficiencies, and duplicated code. A study found that a few simple readability transformations made code shorter and drastically reduced the time to understand it.[19]

Following a consistent programming style often helps readability. However, readability is more than just programming style. Many factors, having little or nothing to do with the ability of the computer to efficiently compile and execute the code, contribute to readability.[20] Some of these factors include:

Different indent styles (whitespace)
Comments
Decomposition
Naming conventions for objects (such as variables, classes, functions, procedures, etc.)
The presentation aspects of this (such as indents, line breaks, color highlighting, and so on) are often handled by the source code editor, but the content aspects reflect the programmer's talent and skills.

Various visual programming languages have also been developed with the intent to resolve readability concerns by adopting non-traditional approaches to code structure and display. Integrated development environments (IDEs) aim to integrate all such help. Techniques like Code refactoring can enhance readability.
The academic field and the engineering practice of computer programming are both largely concerned with discovering and implementing the most efficient algorithms for a given class of problems. For this purpose, algorithms are classified into orders using so-called Big O notation, which expresses resource use, such as execution time or memory consumption, in terms of the size of an input. Expert programmers are familiar with a variety of well-established algorithms and their respective complexities and use this knowledge to choose algorithms that are best suited to the circumstances.
The first step in most formal software development processes is requirements analysis, followed by testing to determine value modeling, implementation, and failure elimination (debugging). There exist a lot of different approaches for each of those tasks. One approach popular for requirements analysis is Use Case analysis. Many programmers use forms of Agile software development where the various stages of formal software development are more integrated together into short cycles that take a few weeks rather than years. There are many approaches to the Software development process.

Popular modeling techniques include Object-Oriented Analysis and Design (OOAD) and Model-Driven Architecture (MDA). The Unified Modeling Language (UML) is a notation used for both the OOAD and MDA.

A similar technique used for database design is Entity-Relationship Modeling (ER Modeling).

Implementation techniques include imperative languages (object-oriented or procedural), functional languages, and logic languages.
It is very difficult to determine what are the most popular modern programming languages. Methods of measuring programming language popularity include: counting the number of job advertisements that mention the language,[21] the number of books sold and courses teaching the language (this overestimates the importance of newer languages), and estimates of the number of existing lines of code written in the language (this underestimates the number of users of business languages such as COBOL).

Some languages are very popular for particular kinds of applications, while some languages are regularly used to write many different kinds of applications. For example, COBOL is still strong in corporate data centers[22] often on large mainframe computers, Fortran in engineering applications, scripting languages in Web development, and C in embedded software. Many applications use a mix of several languages in their construction and use. New languages are generally designed around the syntax of a prior language with new functionality added, (for example C++ adds object-orientation to C, and Java adds memory management and bytecode to C++, but as a result, loses efficiency and the ability for low-level manipulation).
Debugging is a very important task in the software development process since having defects in a program can have significant consequences for its users. Some languages are more prone to some kinds of faults because their specification does not require compilers to perform as much checking as other languages. Use of a static code analysis tool can help detect some possible problems. Normally the first step in debugging is to attempt to reproduce the problem. This can be a non-trivial task, for example as with parallel processes or some unusual software bugs. Also, specific user environment and usage history can make it difficult to reproduce the problem.

After the bug is reproduced, the input of the program may need to be simplified to make it easier to debug. For example, when a bug in a compiler can make it crash when parsing some large source file, a simplification of the test case that results in only few lines from the original source file can be sufficient to reproduce the same crash. Trial-and-error/divide-and-conquer is needed: the programmer will try to remove some parts of the original test case and check if the problem still exists. When debugging the problem in a GUI, the programmer can try to skip some user interaction from the original problem description and check if remaining actions are sufficient for bugs to appear. Scripting and breakpointing is also part of this process.

Debugging is often done with IDEs. Standalone debuggers like GDB are also used, and these often provide less of a visual environment, usually using a command line. Some text editors such as Emacs allow GDB to be invoked through them, to provide a visual environment.
Different programming languages support different styles of programming (called programming paradigms). The choice of language used is subject to many considerations, such as company policy, suitability to task, availability of third-party packages, or individual preference. Ideally, the programming language best suited for the task at hand will be selected. Trade-offs from this ideal involve finding enough programmers who know the language to build a team, the availability of compilers for that language, and the efficiency with which programs written in a given language execute. Languages form an approximate spectrum from "low-level" to "high-level"; "low-level" languages are typically more machine-oriented and faster to execute, whereas "high-level" languages are more abstract and easier to use but execute less quickly. It is usually easier to code in "high-level" languages than in "low-level" ones. Programming languages are essential for software development. They are the building blocks for all software, from the simplest applications to the most sophisticated ones.

Allen Downey, in his book How To Think Like A Computer Scientist, writes:

The details look different in different languages, but a few basic instructions appear in just about every language:
Input: Gather data from the keyboard, a file, or some other device.
Output: Display data on the screen or send data to a file or other device.
Arithmetic: Perform basic arithmetical operations like addition and multiplication.
Conditional Execution: Check for certain conditions and execute the appropriate sequence of statements.
Repetition: Perform some action repeatedly, usually with some variation.
Many computer languages provide a mechanism to call functions provided by shared libraries. Provided the functions in a library follow the appropriate run-time conventions (e.g., method of passing arguments), then these functions may be written in any other language.
Computer programmers are those who write computer software. Their jobs usually involve:

Prototyping
Coding
Debugging
Documentation
Integration
Maintenance
Requirements analysis
Software architecture
Software testing
Specification
Although programming has been presented in the media as a somewhat mathematical subject, some research shows that good programmers have strong skills in natural human languages, and that learning to code is similar to learning a foreign language.[24][25]
ACCU
Association for Computing Machinery
Computer networking
Hello world program
Institution of Analysts and Programmers
National Coding Week
Object hierarchy
Programming best practices
System programming
Computer programming in the punched card era
The Art of Computer Programming
Women in computing
Timeline of women in computing
In telecommunication, a line code is a pattern of voltage, current, or photons used to represent digital data transmitted down a communication channel or written to a storage medium. This repertoire of signals is usually called a constrained code in data storage systems.[1] Some signals are more prone to error than others as the physics of the communication channel or storage medium constrains the repertoire of signals that can be used reliably.[2]

Common line encodings are unipolar, polar, bipolar, and Manchester code.
After line coding, the signal is put through a physical communication channel, either a transmission medium or data storage medium.[3][4] The most common physical channels are:

the line-coded signal can directly be put on a transmission line, in the form of variations of the voltage or current (often using differential signaling).
the line-coded signal (the baseband signal) undergoes further pulse shaping (to reduce its frequency bandwidth) and then is modulated (to shift its frequency) to create an RF signal that can be sent through free space.
the line-coded signal can be used to turn on and off a light source in free-space optical communication, most commonly used in an infrared remote control.
the line-coded signal can be printed on paper to create a bar code.
the line-coded signal can be converted to magnetized spots on a hard drive or tape drive.
the line-coded signal can be converted to pits on an optical disc.
Each line code has advantages and disadvantages. Line codes are chosen to meet one or more of the following criteria:

Minimize transmission hardware
Facilitate synchronization
Ease error detection and correction
Achieve a target spectral density
Eliminate a DC component
Most long-distance communication channels cannot reliably transport a DC component. The DC component is also called the disparity, the bias, or the DC coefficient. The disparity of a bit pattern is the difference in the number of one bits vs the number of zero bits. The running disparity is the running total of the disparity of all previously transmitted bits.[5] The simplest possible line code, unipolar, gives too many errors on such systems, because it has an unbounded DC component.

Most line codes eliminate the DC component – such codes are called DC-balanced, zero-DC, or DC-free. There are three ways of eliminating the DC component:

Use a constant-weight code. Each transmitted code word in a constant-weight code is designed such that every code word that contains some positive or negative levels also contains enough of the opposite levels, such that the average level over each code word is zero. Examples of constant-weight codes include Manchester code and Interleaved 2 of 5.
Use a paired disparity code. Each code word in a paired disparity code that averages to a negative level is paired with another code word that averages to a positive level. The transmitter keeps track of the running DC buildup, and picks the code word that pushes the DC level back towards zero. The receiver is designed so that either code word of the pair decodes to the same data bits. Examples of paired disparity codes include alternate mark inversion, 8b/10b and 4B3T.
Use a scrambler. For example, the scrambler specified in RFC 2615 for 64b/66b encoding.
Bipolar line codes have two polarities, are generally implemented as RZ, and have a radix of three since there are three distinct output levels (negative, positive and zero). One of the principle advantages of this type of code is that it can eliminate any DC component. This is important if the signal must pass through a transformer or a long transmission line.

Unfortunately, several long-distance communication channels have polarity ambiguity. Polarity-insensitive line codes compensate in these channels.[6][7][8][9] There are three ways of providing unambiguous reception of 0 and 1 bits over such channels:

Pair each code word with the polarity-inverse of that code word. The receiver is designed so that either code word of the pair decodes to the same data bits. Examples include alternate mark inversion, Differential Manchester encoding, coded mark inversion and Miller encoding.
differential coding each symbol relative to the previous symbol. Examples include MLT-3 encoding and NRZI.
Invert the whole stream when inverted syncwords are detected, perhaps using polarity switching
For reliable clock recovery at the receiver, a run-length limitation may be imposed on the generated channel sequence, i.e., the maximum number of consecutive ones or zeros is bounded to a reasonable number. A clock period is recovered by observing transitions in the received sequence, so that a maximum run length guarantees sufficient transitions to assure clock recovery quality.

RLL codes are defined by four main parameters: m, n, d, k. The first two, m/n, refer to the rate of the code, while the remaining two specify the minimal d and maximal k number of zeroes between consecutive ones. This is used in both telecommunication and storage systems that move a medium past a fixed recording head.[10]

Specifically, RLL bounds the length of stretches (runs) of repeated bits during which the signal does not change. If the runs are too long, clock recovery is difficult; if they are too short, the high frequencies might be attenuated by the communications channel. By modulating the data, RLL reduces the timing uncertainty in decoding the stored data, which would lead to the possible erroneous insertion or removal of bits when reading the data back. This mechanism ensures that the boundaries between bits can always be accurately found (preventing bit slip), while efficiently using the media to reliably store the maximal amount of data in a given space.

Early disk drives used very simple encoding schemes, such as RLL (0,1) FM code, followed by RLL (1,3) MFM code which were widely used in hard disk drives until the mid-1980s and are still used in digital optical discs such as CD, DVD, MD, Hi-MD and Blu-ray using EFM and EFMPLus codes.[11] Higher density RLL (2,7) and RLL (1,7) codes became the de facto standards for hard disks by the early 1990s.[citation needed]
Line coding should make it possible for the receiver to synchronize itself to the phase of the received signal. If the clock recovery is not ideal, then the signal to be decoded will not be sampled at the optimal times. This will increase the probability of error in the received data.

Biphase line codes require at least one transition per bit time. This makes it easier to synchronize the transceivers and detect errors, however, the baud rate is greater than that of NRZ codes.
A line code will typically reflect technical requirements of the transmission medium, such as optical fiber or shielded twisted pair. These requirements are unique for each medium, because each one has different behavior related to interference, distortion, capacitance and attenuation.[12]
`

export default beginingText;