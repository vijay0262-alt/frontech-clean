export default function ServiceInfo() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#0f172a] border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">
            Service Transparency
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif">
            About Our Services
          </h2>

          <p className="text-[#94a3b8] max-w-2xl mx-auto text-sm sm:text-base">
            Frontech Security provides professional security camera installation
            and smart doorbell setup services for residential properties.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* About */}
          <div className="bg-[#111827] rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-3">
              Independent Installation Service
            </h3>

            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Our technicians help customers install, configure and optimize
              home security systems including wireless cameras and smart video
              doorbells.
            </p>

            <p className="text-[#94a3b8] text-sm leading-relaxed mt-3">
              Frontech Security is an independent installation service provider
              and is not affiliated with or endorsed by any camera manufacturers
              or security brands.
            </p>
          </div>

          {/* Coverage */}
          <div className="bg-[#111827] rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-3">
              Service Coverage
            </h3>

            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Frontech Security provides professional camera installation
              services for residential customers across major cities in the
              United States and Canada.
            </p>
          </div>

          {/* Pricing */}
          <div className="bg-[#111827] rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-3">
              Installation Pricing
            </h3>

            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Pricing depends on the number of cameras, device types and system
              configuration. Our team provides a clear quote before installation
              begins.
            </p>

            <p className="text-[#94a3b8] text-sm leading-relaxed mt-3">
              Contact us today for a free consultation and personalized
              installation estimate.
            </p>
          </div>

          {/* Technicians */}
          <div className="bg-[#111827] rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-3">
              Experienced Security Technicians
            </h3>

            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Our technicians have extensive experience installing wireless
              security cameras, smart doorbells and home surveillance systems
              for residential properties.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
