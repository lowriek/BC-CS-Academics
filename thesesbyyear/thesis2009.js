document.write('\
<div class="well">\
	<h3>2009 Honors Theses</h3>\
	<div class="q">	\
		<h3 class="qhead"><a href="#q200901">Primality Testing and Sub-Exponential Factorization</a></h3>\
		<div class="answer" id="q200901">\
			<p><b>Author:</b> David Emerson</p>\
			<p><b>Title:</b> <a href="pdf/09DavidEmerson.pdf"><em> Primality Testing and Sub-Exponential Factorization</em></a></p>\
			<p><b>Advisor:</b> Howard Straubing</p>\
			<p><b>Abstract</b></p>\
			<p><font size="4">This paper discusses the problems of primality testing and large number factorization. The ﬁrst section is dedicated to a discussion of primality testing algorithms and their importance in real world applications. Over the course of the discussion the structure of the primality algorithms are developed rigorously and demonstrated with examples. This section culminates in the presentation and proof of the modern deterministic polynomial-time Agrawal-Kayal-Saxena algorithm for deciding whether a given n is prime.</font></p>\
			<p><font size="4">The second section is dedicated to the process of factorization of large composite numbers. While primality and factorization are mathematically tied in principle they are very different computationally. This fact is explored and current high powered factorization methods and the mathematical structures on which they are built are examined.</font></p>\
		</div>   <!-- end answer -->\
	</div><!-- end question -->					\
	\
	<div class="q">	\
		<h3 class="qhead"><a href="#q200902"> Videogame Interaction Through Vision-Based Input</a></h3>\
		<div class="answer" id="q200902">		\
			<p><b>Author:</b> Shahbano Imran</p>\
			<p><b>Title:</b> <a href="pdf/09ShahbanoImran.pdf"><em> Videogame Interaction Through Vision-Based Input</em></a></p>\
			<p><b>Advisor:</b> Hao Jiang</p>\
			<p><b>Abstract</b></p>\
			<p><font size="4">The purpose of this project was to build an interface allowing applications and videogames to use non-invasive vision based input as a replacement for conventional input device like a mouse or a joystick for enhanced HCI. The phases of the implementation involve template matching and tracking in real-time processing of video, and recognition of gestures through trajectory tracking. The limited pose estimation involves using the information about the location of the head and hands—regions of interest are first isolated by classifiers such as skin tone, then smaller parts of the frame are processed to achieve a real-time calculation to recognize and track the different parts of the body. Tracking requires segmenting the subject from the background, and matching these segments during consecutive frames. A robust implementation of pose estimation could be used to create interesting vision-based interfaces. Fundamental limitations to current algorithms in pose estimation include the compromise between accuracy and real-time processing costs. I’m focusing on restricting variable factors and using controlled conditions to get maximum accuracy for specific parts of the body, such as hands.</font></p>\
		</div>   <!-- end answer -->\
	</div><!-- end question -->					\
	\
	<div class="q">	\
		<h3 class="qhead"><a href="#q200903"> A Feedback-Based Content Distribution System for Peer-to-Peer Networks</a></h3>\
		<div class="answer" id="q200903">		\
			<!-- IMPORTANT NOTE: Phil Temples is still searching for Jason Croft\'s attachment, so for now, the\
				 title for this thesis is simply the title with no attachment linked to it. -->\
			<p><b>Author:</b> Jason Croft</p>\
			<p><b>Title:</b><em> A Feedback-Based Content Distribution System for Peer-to-Peer Networks</em></p>\
			<p><b>Advisor:</b> Robert Signorile</p>\
			<p><b>Abstract</b></p>\
			<p><font size="4">Persistent control and ownership of data in a decentralized network environment is difficult with no central authority regulating control of, or storing, confidential files. We propose a method to control distribution of confidential data in peer-to-peer (P2P) networks through the use of a feedback-based, restrictive content distribution system. Unauthorized distribution is thwarted through a method of self-destructing, one-time-use data. Transmitted data is encrypted and encapsulated within executables, and authenticated to a single user and machine. After a single use, data is destroyed through a method of in-memory compilation of a new executable, overwriting the original at runtime. Feedback from the executable classifies data transactions as satisfactory or unsatisfactory to compute trust values using a reputation management algorithm. Unsatisfactory transactions, arising from misuse of data (e.g., failed authentication, unauthorized multiple uses, or attempted distribution of data), lowers a peer\'s trust. We examine and modify the algorithms to two distributed reputation systems: EigenTrust, which attempts to reduce distribution of inauthentic files through the notion of transitive trust, and a Bayesian approach by Buchegger and Boudec based on combining first- and second-hand reputation information. We note the strengths and tradeoffs of each, but show the Bayesian approach gives the best results for conditions of our environment.</font></p>\
			<p><font size="3">[NOTE: PDF form of this thesis is not currently available.]</font></p>\
		</div>   <!-- end answer -->\
	</div><!-- end question -->					\
	\
	<div class="q">	\
		<h3 class="qhead"><a href="#q200904">Automatic Solutions of Logic Puzzles</a></h3>\
		<div class="answer" id="q200904">		\
			<!-- IMPORTANT NOTE: Phil Temples is still searching for Peter Sempolinski\'s attachment, so for now, the\
				 title for this thesis is simply the title with no attachment linked to it. -->\
			<p><b>Author:</b> Peter Sempolinski</p>\
			<p><b>Title:</b><em> Automatic Solutions of Logic Puzzles</em></p>\
			<p><b>Advisor:</b> Howard Straubing</p>\
			<p><b>Abstract</b></p>\
			<p><font size="4">The use of computer programs to automatically solve logic puzzles is examined in this work. A typical example of this type of logic puzzle is one in which there are five people, with five different occupations and five different color houses. The task is to use various clues to determine which occupation and which color belongs to each person. The clues to this type of puzzle often are statements such as, “John is not the barber,” or “Joe lives in the blue house.” These puzzles often range widely in complexity with varying numbers of objects to identify and varying numbers of characteristics that need to be identified for each object.</font></p>\
			<p><font size="4">With respect to the theoretical aspects of solving these puzzles automatically, this work proves that the problem of determining, given a logic puzzle, whether or not that logic puzzle has a solution is NP-Complete. This implies, provided that P is not equal to NP, that, for large inputs, automated solvers for these puzzles will not be efficient in all cases.</font></p>\
			<p><font size="4">Having proved this, this work proceeds to seek methods that will work for solving these puzzles efficiently in most cases. To that end, each logic puzzle can be encoded as an instance of boolean satisfiability. Two possible encodings are proposed that both translate logic puzzles into boolean formulas in conjunctive normal form. Using a selection of test puzzles, a group of boolean satisfiability solvers is used to solve these puzzles in both encodings. In most cases, these simple solvers are successful in producing solutions efficiently.</font></p>\
			<p><font size="3">[NOTE: PDF form of this thesis is not currently available.]</font></p>\
		</div>   <!-- end answer -->\
	</div><!-- end question -->					\
</div> <!-- end 2009-->\
');