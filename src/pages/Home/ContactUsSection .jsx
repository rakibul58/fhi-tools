import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";
import contactImg from '../../assets/contact.png'

const ContactUsSection = () => {
    const form = useRef();
    const key = import.meta.env.VITE_emailjs_key;
    const template = import.meta.env.VITE_emailjs_template;
    const secret = import.meta.env.VITE_emailjs_secret;

    // console.log(key, template, secret);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(key, template, form.current, secret)
            .then(() => {
                toast.success("Message Sent");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-base items-center">
                <div className="flex flex-col gap-5 text- justify-between">
                    <div className="space-y-2 text-center lg:text-left">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-accent">Lets talk!</h2>
                        <div className="">Ask us what you want to know?</div>
                    </div>
                    <img src={contactImg} alt="" className="h-full mx-auto" />
                </div>
                <form ref={form} onSubmit={sendEmail} noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid shadow-2xl p-10 rounded-xl bg-opacity-5 bg-slate-500">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input name="user_name" id="name" type="text" placeholder="Name" className="w-full p-3 bg-black bg-opacity-5  mt-3 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input name="user_email" placeholder='Email' id="email" type="email" className="w-full p-3 bg-black bg-opacity-5 mt-3 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea name="message" placeholder='Message' id="message" rows="3" className="w-full p-3 bg-black bg-opacity-5 mt-3 rounded-lg"></textarea>
                    </div>
                    <input type="submit" className="w-full p-3 font-bold btn bg-[#1DCD64] hover:bg-[#1dcd63b0] text-white rounded-full" value='Send Message' />
                </form>
            </div>
        </div>
    );
};

export default ContactUsSection;