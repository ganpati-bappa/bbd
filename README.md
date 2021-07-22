<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Blood_Bank_Search_App_BBD_0"></a>Blood Bank Search App “BBD”</h1>
<h4 class="code-line" data-line-start=1 data-line-end=2 ><a id="Every_Life_Matters_1"></a>Every Life Matters</h4>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![GitHub Issues](https://img.shields.io/github/issues/anfederico/clairvoyant.svg)](https://github.com/Mohit9486/bbd/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A Simple to use Android ios and web app to search required blood in near by blood banks and donors.</p>
<h2 class="code-line" data-line-start=7 data-line-end=8 ><a id="Features_7"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="8" data-line-end="9">Search Blood Banks by location.</li>
<li class="has-line-data" data-line-start="9" data-line-end="10">Send request to near by donor if blood is not available in blood bank.</li>
<li class="has-line-data" data-line-start="10" data-line-end="11">Organize Blood Donation drive with the help of our platform.</li>
<li class="has-line-data" data-line-start="11" data-line-end="12">Register yourself in blood donation camps for donation of blood.</li>
<li class="has-line-data" data-line-start="12" data-line-end="14">Register yourself as a donor to help others.</li>
</ul>
<p class="has-line-data" data-line-start="14" data-line-end="15">Our app includes these features with complete login using mobile otp and a simple and clean ui.</p>
<h2 class="code-line" data-line-start=16 data-line-end=17 ><a id="Tech_16"></a>Tech</h2>
<p class="has-line-data" data-line-start="18" data-line-end="19">BBD uses a number of open source tools and libraries to work properly:</p>
<h5 class="code-line" data-line-start=20 data-line-end=21 ><a id="Frontend_20"></a>Frontend</h5>
<ul>
<li class="has-line-data" data-line-start="21" data-line-end="22"><a href="https://reactjs.org/">React.js</a> - JavaScript library for building or UI components</li>
<li class="has-line-data" data-line-start="22" data-line-end="23"><a href="https://reactnative.dev/">ReactNative</a> - JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android</li>
<li class="has-line-data" data-line-start="23" data-line-end="24"><a href="https://www.npmjs.com/package/redux">Redux</a> - JavaScript library for managing application state.</li>
<li class="has-line-data" data-line-start="24" data-line-end="26"><a href="https://www.npmjs.com/package/axios">Axios</a> - Promise based HTTP client for the browser and node.js.</li>
</ul>
<h5 class="code-line" data-line-start=26 data-line-end=27 ><a id="Backend_26"></a>Backend</h5>
<ul>
<li class="has-line-data" data-line-start="27" data-line-end="28"><a href="http://nodejs.org">Node.js</a> - evented I/O for the backend</li>
<li class="has-line-data" data-line-start="28" data-line-end="29"><a href="http://expressjs.com">Express.js</a> - fast node.js network app framework</li>
<li class="has-line-data" data-line-start="29" data-line-end="30"><a href="https://www.mongodb.com/">MongoDB</a> - a document-oriented NoSql database</li>
<li class="has-line-data" data-line-start="30" data-line-end="32"><a href="https://www.npmjs.com/package/mongoose">Mongoose.js</a> - an Object Data Modeling (ODM) library for MongoDB and Node. js.</li>
</ul>
<p class="has-line-data" data-line-start="32" data-line-end="33">And of course BBD itself is open source with a  <a href="https://github.com/joemccann/dillinger">public repository</a> on GitHub.</p>
<h2 class="code-line" data-line-start=34 data-line-end=35 ><a id="Installation_34"></a>Installation</h2>
<h4 class="code-line" data-line-start=36 data-line-end=37 ><a id="Server_36"></a>Server</h4>
<p class="has-line-data" data-line-start="37" data-line-end="38">BBD requires <a href="https://nodejs.org/">Node.js</a> v10+ and ngrok to run.</p>
<p class="has-line-data" data-line-start="39" data-line-end="40">Install ngrok</p>
<pre><code class="has-line-data" data-line-start="41" data-line-end="43" class="language-sh">npm install -g ngrok
</code></pre>
<p class="has-line-data" data-line-start="44" data-line-end="45">Install the dependencies and and start the server.</p>
<pre><code class="has-line-data" data-line-start="46" data-line-end="50" class="language-sh"><span class="hljs-built_in">cd</span> server
npm i
npm start
</code></pre>
<p class="has-line-data" data-line-start="51" data-line-end="52">In second terminal</p>
<pre><code class="has-line-data" data-line-start="53" data-line-end="56" class="language-sh">ngrok http <span class="hljs-number">5000</span>
grab server url and use it as api <span class="hljs-keyword">in</span> frontend
</code></pre>
<h4 class="code-line" data-line-start=57 data-line-end=58 ><a id="Web_App_57"></a>Web App</h4>
<p class="has-line-data" data-line-start="58" data-line-end="60">BBD requires <a href="https://reactjs.org/">React.js</a> v16+ to run.<br>
Install the dependencies and and start the webapp.</p>
<pre><code class="has-line-data" data-line-start="61" data-line-end="65" class="language-sh"><span class="hljs-built_in">cd</span> web
npm i
npm start
</code></pre>
<h4 class="code-line" data-line-start=66 data-line-end=67 ><a id="Mobile_App_66"></a>Mobile App</h4>
<p class="has-line-data" data-line-start="67" data-line-end="69">BBD requires <a href="https://expo.io/">Expo</a> to run.<br>
Install expo-cli</p>
<pre><code class="has-line-data" data-line-start="70" data-line-end="72" class="language-sh">npm install --global expo-cli
</code></pre>
<p class="has-line-data" data-line-start="73" data-line-end="74">Install the dependencies and and start the App.</p>
<pre><code class="has-line-data" data-line-start="75" data-line-end="80" class="language-sh"><span class="hljs-built_in">cd</span> mobile
npm i
expo start
scan qr code <span class="hljs-keyword">in</span> expo app and boom app is runing.
</code></pre>
<h2 class="code-line" data-line-start=81 data-line-end=82 ><a id="Contributing_81"></a>Contributing</h2>
<p class="has-line-data" data-line-start="83" data-line-end="84">Want to contribute? Great!</p>
<ul>
<li class="has-line-data" data-line-start="84" data-line-end="85">Fork the Project</li>
<li class="has-line-data" data-line-start="85" data-line-end="86">Create your Feature Branch (git checkout -b feature/AmazingFeature)</li>
<li class="has-line-data" data-line-start="86" data-line-end="87">Commit your Changes (git commit -m ‘Add some AmazingFeature’)</li>
<li class="has-line-data" data-line-start="87" data-line-end="88">Push to the Branch (git push origin feature/AmazingFeature)</li>
<li class="has-line-data" data-line-start="88" data-line-end="90">Open a Pull Request</li>
</ul>
<h2 class="code-line" data-line-start=90 data-line-end=91 ><a id="feadback_90"></a>feadback</h2>
<p class="has-line-data" data-line-start="92" data-line-end="93">Have an idea to tack it forword make a PR or open a issue.</p>
<p class="has-line-data" data-line-start="94" data-line-end="95">All the PR’s and Issue’s are Welcome</p>
<h2 class="code-line" data-line-start=96 data-line-end=97 ><a id="License_96"></a>License</h2>
<p class="has-line-data" data-line-start="98" data-line-end="99">MIT</p>
<p class="has-line-data" data-line-start="100" data-line-end="101"><strong>Free Software, Hell Yeah!</strong></p>
