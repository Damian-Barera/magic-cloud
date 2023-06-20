import { clientes } from "./db";

function App() {
	return (
		<div className="min-h-screen flex flex-col text-white">
			<main className="container mx-auto px-6 pt-4 flex-1 text-center">
				<header className="container mx-auto sticky top-0">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<p className="mb-4 md:mb-0 md:text-xl">Magic Cloud Logo</p>

						<div className="flex -mx-6">
							<a href="#" className="mx-3 hover:opacity-80 duration-150">Nosotros</a> | 
							<a href="#proyectos" className="mx-3 hover:opacity-80 duration-150">Proyectos</a> | 
							<a href="#" className="mx-3 hover:opacity-80 duration-150">Contacto</a>
						</div>
					</div>
				</header>

				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Desarrollo Web</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">MAGIC CLOUD</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-8">¡Un lugar donde hacer realidad tus ideas!</p>

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
					Nuestros Principales Proyectos
				</div>

				<div id= "proyectos" className="flex flex-wrap justify-center gap-4 p-8">
					{clientes.map(cliente => (
						<div className="w-1/3" key={cliente.id}>
							<h2 className="">{cliente.name}</h2>
							<a target="_blank" href={cliente.link}>{cliente.button}</a>
						</div>
					))}
				</div>

				<form 
					action="https://www.getrevue.co/profile/tyler_potts_/add_subscriber" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your email address..."
							type="email"
							name="member[email]"
							id="member_email"
							className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Join Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

					<div className="opacity-75 italic">
						By subscribing, you agree with Revue's <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
					</div>

				</form>
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Magic Cloud, all rights Reserved</p>

					<div className="flex -mx-6">
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Whatsapp</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Mail</a>
					</div>
				</div>
			</footer>
		</div>	
	)
}

export default App
