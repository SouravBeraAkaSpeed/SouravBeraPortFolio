import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import useAlert from "../hooks/useAlert";

import Fox from "../models/fox";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const { alert, showAlert, hideAlert } = useAlert();
	const [loading, setLoading] = useState(false);
	const [currentAnimation, setCurrentAnimation] = useState("idle");

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleFocus = () => setCurrentAnimation("walk");
	const handleBlur = () => setCurrentAnimation("idle");

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setCurrentAnimation("hit");

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					name: form.name,
					email: form.email,
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					showAlert({
						show: true,
						text: "Thank you for your message 😃",
						type: "success",
					});

					setTimeout(() => {
						hideAlert(false);
						setCurrentAnimation("idle");
						setForm({
							name: "",
							email: "",
							message: "",
						});
					}, [3000]);
				},
				(error) => {
					setLoading(false);
					console.error(error);
					setCurrentAnimation("idle");

					showAlert({
						show: true,
						text: "I didn't receive your message 😢",
						type: "danger",
					});
				}
			);
	};

	return (
		<>
			<section className="relative flex lg:flex-row flex-col max-container">
				{alert.show && <Alert {...alert} />}

				<div className="flex-1 min-w-[50%] flex flex-col">
					<h1 className="head-text">Get in Touch</h1>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="w-full flex flex-col gap-7 mt-14"
					>
						<label className="text-black-500 font-semibold">
							Name
							<input
								type="text"
								name="name"
								className="input"
								placeholder="John"
								required
								value={form.name}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<label className="text-black-500 font-semibold">
							Email
							<input
								type="email"
								name="email"
								className="input"
								placeholder="John@gmail.com"
								required
								value={form.email}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<label className="text-black-500 font-semibold">
							Your Message
							<textarea
								name="message"
								rows="4"
								className="textarea"
								placeholder="Write your thoughts here..."
								value={form.message}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>

						<button
							type="submit"
							disabled={loading}
							className="btn"
							onFocus={handleFocus}
							onBlur={handleBlur}
						>
							{loading ? "Sending..." : "Send Message"}
						</button>
					</form>
				</div>

				<div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
					<Canvas
						camera={{
							position: [0, 0, 5],
							fov: 75,
							near: 0.1,
							far: 1000,
						}}
					>
						<directionalLight position={[0, 0, 1]} intensity={2.5} />
						<ambientLight intensity={1} />
						<pointLight position={[5, 10, 0]} intensity={2} />
						<spotLight
							position={[10, 10, 10]}
							angle={0.15}
							penumbra={1}
							intensity={2}
						/>

						<Suspense fallback={<Loader />}>
							<Fox
								currentAnimation={currentAnimation}
								position={[0.5, 0.35, 0]}
								rotation={[12.6, -0.6, 0]}
								scale={[0.5, 0.5, 0.5]}
							/>
						</Suspense>
					</Canvas>
				</div>
			</section>
			<section className="text-gray-600 body-font relative">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-1/2 md:w-2/3 mx-auto">
						<div className="flex flex-wrap -m-2">
							<div className="p-2 w-full pt-8 mt-8 border-gray-200 text-center">
								<h4 className="leading-normal my-5">SOURAV BERA</h4>
								<a className="text-indigo-500">souravberaofficial@gmail.com</a>
								<p className="leading-normal my-5">
									SS1286 Sector H Aashiyana Lda
									<br />
									Lucknow , India 226012
								</p>
								<p className="leading-normal my-5">+91 6388961129</p>
								<span className="inline-flex">
									<a
										className="ml-4 text-gray-500"
										href="https://x.com/Sourav_Bera_"
									>
										<svg
											fill="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a
										className="ml-4 text-gray-500"
										href="https://www.instagram.com/gralius._"
									>
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
