"use client"

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
        <Header />  
            <section className="py-32 bg-black text-white relative">
            <div className="container mx-auto px-8">
                {/* Titre de la page Contact */}
                <div className="text-center mb-20">
                <h2 className="text-6xl md:text-8xl font-serif text-white mb-6">Contactez-nous</h2>
                <div className="w-24 h-px bg-amber-400 mx-auto"></div>
                <p className="mt-8 text-neutral-300 text-lg font-light max-w-3xl mx-auto">
                    Nous sommes à votre écoute pour toutes demandes de renseignements, collaborations ou projets sur mesure.
                    Utilisez le formulaire ci-dessous ou nos coordonnées directes.
                </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Section Formulaire */}
                <div className="bg-neutral-900 p-10 rounded-lg shadow-xl">
                    <h3 className="text-3xl font-serif text-white mb-8">Envoyez-nous un message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                        Nom Complet
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-neutral-500"
                        placeholder="Votre nom"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                        Adresse Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-neutral-500"
                        placeholder="votre.email@exemple.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                        Sujet
                        </label>
                        <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-neutral-500"
                        placeholder="Objet de votre demande"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                        Votre Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-neutral-500"
                        placeholder="Décrivez votre projet ou votre question en détail..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="group relative overflow-hidden bg-amber-400 text-black px-8 py-3 rounded-md hover:bg-amber-500 transition-all duration-300 text-lg font-medium tracking-wide uppercase"
                    >
                        Envoyer le message
                    </button>
                    </form>
                </div>

                {/* Section Coordonnées et Informations */}
                <div className="lg:pl-8">
                    <h3 className="text-3xl font-serif text-white mb-8">Nos Coordonnées</h3>
                    <div className="space-y-8">
                    <div className="flex items-start">
                        <Mail className="text-amber-400 w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                        <div>
                        <h4 className="text-xl font-serif text-white mb-1">Email</h4>
                        <p className="text-neutral-300 text-lg">hello@atelier-couture.fr</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Phone className="text-amber-400 w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                        <div>
                        <h4 className="text-xl font-serif text-white mb-1">Téléphone</h4>
                        <p className="text-neutral-300 text-lg">+33 1 42 86 87 88</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MapPin className="text-amber-400 w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                        <div>
                        <h4 className="text-xl font-serif text-white mb-1">Adresse</h4>
                        <p className="text-neutral-300 text-lg">
                            15 Rue de la Paix
                            <br />
                            75001 Paris, France
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* Carte Google Maps */}
                    <div className="mt-12">
                    <h3 className="text-3xl font-serif text-white mb-6">Où nous trouver</h3>
                    <div className="relative w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-700">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.502851412574!2d2.329241515674972!3d48.86874537928738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf3e0d8f07%3A0x7d6c6a4d7d3d7d3!2s15%20Rue%20de%20la%20Paix%2C%2075002%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1678912345678!5m2!1sen!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation de l'Atelier"
                        ></iframe>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        <Footer />
    </>
  );
}