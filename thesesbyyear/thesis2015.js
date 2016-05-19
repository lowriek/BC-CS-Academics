/* javascript template for thesis years  - remember to change all \r to \\\r  */
document.write('\
<div class="well">\
	<h3>2015 Honors Theses</h3>\
	<div class="q">	\
		<h3 class="qhead"><a href="#q201501">Neuroprosthetics: An Investigation into Utilizing EEG Brain Waves to Control a Robotic Arm</a></h3>\
		<div class="answer" id="q201501">\
			<p><b>Author:</b>Jake St. Germain</p>\
			<p><b>Title:</b> <a href="15JakeStGermain.pdf"><em>Neuroprosthetics: An Investigation into Utilizing EEG Brain Waves to Control a Robotic Arm</em></a></p>\
			<p><b>Advisor:</b> Sergio Alvarez</p>\
			<p><b>Abstract</b></p>\
			<p><font size="4">\
				Medical advances have created a society where more people are surviving life- threatening injuries, although at a physical cost. Individuals who are handicapped due to these enormous medical developments are becoming increasingly more common, especially ones who are living with limited motion of their extremities, paralyzed from the head or waist down, or are paraplegic or quadriplegic. Improvements in prosthetic technology have not yet caught up to the medical world, often limiting the options for these individuals to assimilate back into society. This thesis proposes that it is possible to directly connect the brain, through the measurement of EEG waves, to a robotic arm to increase functionality and movement. This union will require the frequency of EEG brain waves and the transfer and manipulation of this information to a robotic arm, all in real-time. This research will utilize the capabilities of the Emotiv EPOC system to record and parse brain waves, which will then be transferred to a Lego NXT robot set that resembles a prosthetic arm. That system simulates a BCI, or Brain Computer Interface, where the brain is able to communicate with an external source, or the Lego arm.\
			</font></p>\
		</div>   <!-- end answer -->\
	</div><!-- end question -->\
	\
	<div class="q">	\
		<h3 class="qhead"><a href="#q201502">Mutational Fuzzing to Discover Software Bugs and Vulnerabilities</a></h3>\
		<div class="answer" id="q201502">\
			<p><b>Author:</b>Dylan Wolff</p>\
			<p><b>Title:</b> <a href="15DylanWolff.pdf"><em>Mutational Fuzzing to Discover Software Bugs and Vulnerabilities</em></a></p>\
			<p><b>Advisor:</b> Sergio Alvarez</p>\
			<p><b>Abstract</b></p>\
			<p><font size="4">\
				Recent major vulnerabilities such as the Heartbleed bug have emphasized the importance of properly testing software. For both product testers and hackers, fuzzing has emerged as an important tool used to find these issues. This thesis investigates one branch of the field, mutational fuzzing, in which valid inputs are randomly altered to produce sample files. While the samples produced by this approach are not as efficient as the hand-crafted inputs used in generational fuzzing, a mutational fuzzer can easily be used on multiple applications with no prior knowledge of the input formats and only a small amount of setup. The fuzzer created for this thesis, written in Python, is a multiprocessing, distributed generic file fuzzer, and was used to test the popular media player VLC for bugs.\
			</font></p>\
		</div>   <!-- end answer -->\
	</div><!-- end question -->	\
</div> \
');