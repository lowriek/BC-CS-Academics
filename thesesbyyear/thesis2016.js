/* javascript template for thesis years  - remember to change all \r to \\\r  */
document.write('\
<div class="well">\
	<h3>2016 Honors Theses</h3>\
	<div class="q">	\
		<h3 class="qhead"><a href="#q201601">A Machine Learning Approach to Automated Trading</a></h3>\
		<div class="answer" id="q201601">\
			<p><b>Author:</b>Ning Lu</p>\
			<p><b>Title:</b> <a href="pdf/16Lu.pdf"><em>A Machine Learning Approach to Automated Trading</em></a></p>\
			<p><b>Advisor:</b> Sergio Alvarez</p>\
			<p><b>Abstract</b></p>\
			<p><font size="4">\
				The Financial Market is a complex and dynamical system, and is influenced by many factors that are subject to uncertainty. Therefore, it is a difficult task to forecast stock price movements. Machine Learning aims to automatically learn and recognize patterns in large data sets. The self­organizing and self­learning characteristics of Machine Learning algorithms suggest that such algorithms might be effective to tackle the task of predicting stock price fluctuations, and in developing automated trading strategies based on these predictions. Artificial intelligence techniques have been used to forecast market movements, but published approaches do not typically include testing in a real (or simulated) trading environment.\
			</font></p>\
			<p><font size="4">\
				This thesis aims to explore the application of various machine learning algorithms, such as Logistic Regression, Naïve Bayes, Support Vector Machines, and variations of these techniques, to predict the performance of stocks in the S&P 500. Automated trading strategies are then developed based on the best performing models. Finally, these strategies are tested in a simulated market trading environment to obtain out­of­sample validation of predictive performance.</font></p>\
			</font></p>\
		</div>   <!-- end answer -->\
	</div><!-- end question -->\
	\
	<div class="q">	\
		<h3 class="qhead"><a href="#q201602">PaintSpace: Exploring the Concept of Painting on a 3D Canvas Using Virtual Reality and 3D Input</a></h3>\
		<div class="answer" id="q201602">\
			<p><b>Author:</b>Benjamin Madany</p>\
			<p><b>Title:</b> <a href="pdf/16Madany.pdf"><em>PaintSpace: Exploring the Concept of Painting on a 3D Canvas Using Virtual Reality and 3D Input</em></a></p>\
			<p><b>Advisor:</b> Robert Signorile</p>\
			<p><b>Abstract</b></p>\
			<p><font size="4">\
				3D technology has seen a wide range of innovations, from 3D graphics and modeling to 3D printing. Among the most recent of these innovations are immersive virtual reality and 3D input. These have allowed for the creation of unique, 3D experiences, and they also present the opportunity for a wide variety of applications whose purposes range from entertainment to educational or medical use. One possibility is an extension of 3D modeling that utilizes these recent technologies to present a 3D canvas to an artist. Applications such as Google’s Tilt Brush explore this concept of drawing in 3D space. As the ability to draw in such space is novel, development of such a tool presents several challenges. This thesis explores the process of building a 3D painting application. I first present the key challenges encountered during development. Then, I detail various solutions and options related to these challenges. Next, I examine the capabilities and state of my application, and finally, I compare it to other available applications.\
			</font></p>\
		</div>   <!-- end answer -->\
	</div><!-- end question -->	\
\
	<div class="q">	\
		<h3 class="qhead"><a href="#q201603">Long Short-Term Memory Recurrent Neural Network Architectures for Generating Music and Japanese Lyrics</a></h3>\
		<div class="answer" id="q201603">\
			<p><b>Author:</b>Ayako Mikami</p>\
			<p><b>Title:</b> <a href="pdf/16Mikami.pdf"><em>Long Short-Term Memory Recurrent Neural Network Architectures for Generating Music and Japanese Lyrics</em></a></p>\
			<p><b>Advisor:</b>Sergio Alvarez</p>\
			<p><b>Abstract</b></p>\
			<p><font size="4">\
				Recent work in deep machine learning has led to more powerful artificial neural network designs, including Recurrent Neural Networks (RNN) that can process input sequences of arbitrary length. We focus on a special kind of RNN known as a Long-Short-Term-Memory (LSTM) network. LSTM networks have enhanced memory capability, creating the possibility of using them for learning and generating music and language.\
			</font></p>\
			<p><font size="4">\
				This thesis focuses on generating Chinese music and Japanese lyrics using LSTM networks. For Chinese music generation, an existing LSTM implementation is used called char-RNN written by Andrej Karpathy in the Lua programming language, using the Torch deep learning library. I collected a data set of 2,500 Chinese folk songs in abc notation, to serve as the LSTM training input. The network learns a probabilistic model of sequences of musical notes from the input data that allows it to generate new songs. To generate Japanese lyrics, I modified Denny Britz’s GRU model into a LSTM networks in the Python programming language, using the Theano deep learning library. I collected over 1MB of Japanese Pop lyrics as the training data set. For both implementations, I discuss the overall performance, design of the model, and adjustments made in order to improve performance.\
			</font></p>\
		</div>   <!-- end answer -->\
	</div><!-- end question -->	\
\
</div> \
');