document.write('\
<div class="well">\
	<h3>Theses for 2013</h3>\
	<div class="q">	\
		<h3 class="qhead"><a href="#q201301">Low-Overhead Concurrency Control Using State-Based Transaction Scheduling</a></h3>\
		<div class="answer" id="q201301">\
				<p><b>Author:</b> Andrew Crotty</p>\
				<p><b>Title:</b> <a href="pdf/13crotty.pdf"><em> </em></a></p>\
				<p><b>Advisor:</b> Ed Sciore</p>\
				<p><b>Abstract</b></p>\
				<p><font size="4">NewSQL RDBMSs specifically target OLTP applications, attempting to combine the high performance of NoSQL systems with the ACID guarantees of traditional architectures. Of late, these RDBMSs have eschewed the standard design practices of their predecessors in favor of more streamlined and specialized techniques. One such innovation in vogue at present is the serial execution model, in which data is divided into optimally sized partitions that each own a single worker thread for processing. Research suggests that, in current main-memory systems, this approach actually outperforms customary concurrency mechanisms by providing maximal CPU utilization at minimal cost. However, the serial execution model makes stringent assumptions regarding the partitionability of datasets, and many common workloads do not possess such characteristics.</font></p>\
				<p><font size="4">In order to better address these workloads, we present a low-overhead concurrency control model that does not rely on strict expectations about partitionability. Our design uses a novel state-based transaction scheduler to efficiently organize the concurrent execution of non-conflicting operations. We demonstrate that our model achieves optimal CPU utilization for the aforementioned workloads and out-performs other concurrency control strategies.</font></p>\
			</div>   <!-- end answer -->\
	</div><!-- end question -->\
	<div class="q">	\
		<h3 class="qhead"><a href="#q201302">Digital Paintchat: Examining and Expanding Digital Collaborative Tools for Artists</a></h3>\
		<div class="answer" id="q201302">\
				<p><b>Author:</b> Helen Jiang</p>\
				<p><b>Title:</b> <a href="pdf/13jiang.pdf"><em> Digital Paintchat: Examining and Expanding Digital Collaborative Tools for Artists</em></a></p>\
				<p><b>Advisor:</b> William Ames</p>\
				<p><b>Abstract</b></p>\
				<p><font size="4">The digital world has revolutionized virtually every aspect of peoples\' lives. Many professional illustrators have begun to use digital tools in order to simplify their drawing process and make it more efficient. There are many different software programs that artists use, each fitted to meet different needs, such as photo manipulation, painting, or animation. Although digital art is constantly evolving and expanding, and there is little research on how artists interact with digital media.</font></p>\
				<p><font size="4">Communication is one of the areas in which technology has had the most profound change. People from anywhere in the world have the ability to contact each other at a moment\'s notice. This reality has lead to new, fruitful collaborations in a variety of fields. Thus far, there are no fully-functional artist tools that enable direct communication between artists. My thesis involves the planning and implementation of such a program.</font></p>\
				<p><font size="4">I first conducted a digital arts survey to gather data on how current digital artists interact with the programs they are using, the way they use tools that are common among all digital art software programs, as well as the shortcomings of these tools and digital art in general. The survey was answered by both amateur and professional artists from online art communities, the majority of whom have been using art programs for over four years. Afterwards, I began programming a basic drawing program based on the results of the survey, and added networking capabilities.</font></p>\
			</div>   <!-- end answer -->\
	</div><!-- end question -->\
	\
	<div class="q">	\
		<h3 class="qhead"><a href="#q201303"> Automatic Pitch Detection and Shifting of Musicial Tones in Real Time</a></h3>\
		<div class="answer" id="q201303">\
				<p><b>Author:</b> Jinho Kim</p>\
				<p><b>Title:</b> <a href="pdf/13kim.pdf"><em> Automatic Pitch Detection and Shifting of Musicial Tones in Real Time</em></a></p>\
				<p><b>Advisor:</b> Sergio Alvarez</p>\
				<p><b>Abstract</b></p>\
				<p><font size="4">Musical notes are acoustic stimuli with specific properties that trigger a psychological perception of pitch. Pitch is directly associated with the fundamental frequency of a sound wave, which is typically the lowest frequency of a periodic waveform. Shifting the perceived pitch of a sound wave is most easily done by changing the playback speed, but this method warps some of the characteristics and changes the time scale. This thesis aims to accurately shift the pitch of musical notes while preserving its other characteristics, and it implements this in real time on an Android device. There are various methods of detecting and shifting pitch, but in the interests of simplicity, accuracy, and speed, a three step process is used. First, the fundamental pitch of a stable periodic section of the signal is found using the Yin pitch detection algorithm. Secondly, pitch marks that represent the local peak of energy are found, each spaced out by roughly one period (inverse of the fundamental frequency). Lastly, these marks are used in the Pitch Synchronous Overlap and Add (PSOLA) algorithm to generate a new signal with the desired fundamental frequency and similar acoustical characteristics to the original signal.</font></p>\
			</div>   <!-- end answer -->\
	</div><!-- end question -->\
	\
	<div class="q">	\
		<h3 class="qhead"><a href="#q201304">Logical Time Synchronization in Distributed Networks with Volatile Latency</a></h3>\
		<div class="answer" id="q201304">\
				<p><b>Author:</b> Matt Ricketson</p>\
				<p><b>Title:</b> <a href="pdf/13ricketson.pdf"><em> Logical Time Synchronization in Distributed Networks with Volatile Latency</em></a></p>\
				<p><b>Advisor:</b> Robert Signorile</p>\
				<p><b>Abstract</b></p>\
				<p><font size="4">The ability to accurately synchronize logical time between nodes in a network is important for various applications such as data collection, distributed robotics, and gaming. Most existing algorithms for time synchronization, however, are either only applicable in networks with low, consistent latency, or that are not distributed in nature. This is suitable for computers perpetually connected to WiFi or wired networks, but for mobile, embedded devices connected through volatile-latency networks such as cellular networks and that often communicate in a distributed manner, these algorithms are less than ideal.</font></p>\
				<p><font size="4">This thesis explores a new method for time synchronization in these types of networks, called the "Follower" algorithm, which is shown to be effective at adapting to rapid, inconsistent changes in latency and to be ideal for distributed networks where nodes are disconnected and reconnected constantly. The algorithm is evaluated through extensive virtual network simulations that directly compare its effectiveness against Cristian\'s time synchronization algorithm, and is also implemented in a physical network of minimalist Arduino-based devices to show its potential benefit for reducing cost and complexity in distributed sensor networks.</font></p>\
			</div>   <!-- end answer -->\
	</div><!-- end question -->\
</div>\
');