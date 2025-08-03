

const projects=[
	{
		name: "Agnostic RAG",
		url: "https://github.com/SakethAjith/Agnostic-RAG",
		description:"A simple tool designed to make efficient use of LLM's by leveraging Retrieval Augmented Generation in order to obtain relevant information from a provided corpus of text quickly, and reduce chances of hallucination."
	},
	{
		name: "Voice Analyser",
		url: "https://github.com/SakethAjith/Voice-Analyser",
		description:"To determine a persons mood to be happy, angry or sad by analysing their voice"
	},
	{
		name: "Crypto Price Tracker",
		url: "https://github.com/SakethAjith/CryptoPrice",
		description:"A project to keep track of the real time price of 10,000+ crypto currencies and price hisotry via real time database"
	},
]
const content=`
	<div>
	<div class="Page_Title">Projects</div>
		<div class="Projects_Container">
		${
			projects.map((x)=>{
				return `
				<div class="Project_Container">
					<a class="Project_Title" href="${x.url}">${x.name}</a>
					<div class="Project_Description">${x.description}</div>
				</div>`
			}).join('')
		}
		</div>
	</div>
`

const projectContent=
	`
<h1>Projects</h1>
<div class="mt-4 flex-col space-y-4">
	<div class="max-w-sm w-full lg:max-w-full lg:flex">
		<div
			class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
		</div>
		<div> <!--
                class="w-xs border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                -->
			<div class="mb-8">
				<div class="text-sky-900 font-bold text-xl mb-2">
					<a href="https://github.com/SakethAjith/Voice-Analyser"
						class="text-blue-600 dark:text-blue-500 hover:underline">
						Voice Analyser
					</a>
				</div>
				<p class="text-gray-700 text-base">To determine a persons mood to be happy, angry or sad
					by analysing
					their voice</p>
			</div>
		</div>
	</div>
	<div class="max-w-sm w-full lg:max-w-full lg:flex">
		<div
			class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
		</div>
		<div> <!--class="w-xs border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                -->
			<div class="mb-8">
				<div class="text-gray-900 font-bold text-xl mb-2">
					<a href="https://github.com/SakethAjith/CryptoPrice"
						class="text-blue-600 dark:text-blue-500 hover:underline">
						Crypto Price
					</a>
				</div>
				<p class="text-gray-700 text-base">A real time crypto price tracker, with time series
					database for
					historical data</p>
			</div>
		</div>
	</div>
</div>`
export default content;
