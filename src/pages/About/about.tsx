import Profile from "@/assets/_profile.jpg";
import CenteredLayout from "@/components/centeredLayout";
import Header from "@/components/header";
import JobItem from "@/components/jobItem";
import ContactSection from "@/components/contactSection";

function About() {
  return (
    <>
      <CenteredLayout>
        <Header />
        <div className="flex items-center justify-center flex-col p-6">
          <div className="w-full flex justify-between items-center md:gap-12 sm:gap-9 max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:justify-center">
            <img
              className="w-72 h-72 rounded-lg"
              src={Profile}
              alt="Kayke Barbosa Loiola"
            />
            <div className="w-2/3 h-72 md:shrink max-[600px]:h-auto max-[600px]:mt-5 max-[600px]:w-[90%]">
              <p className="text-left font-medium text-zinc-300 tracking-wider md:text-[0.95rem] sm:text-[0.85rem]">
                Olá, sou Kayke Barbosa, um Desenvolvedor de Software dedicado e
                entusiasta da tecnologia. Possuo especialização em JavaScript
                (Node.js, React.js, React Native, entre outros) e PHP, com
                experiência significativa em frameworks como Nest.js, Next.js e
                Laravel.
                <br />
                <br />
                Com mais de um ano de atuação, contribuí para diversos projetos
                de sucesso. Além da minha atividade profissional, tenho
                interesse em música, literatura e aprecio uma boa xícara de
                café. Estou sempre aberto para discutir tecnologia, enfrentar
                desafios ou simplesmente conversar. Se desejar entrar em
                contato, estou à disposição.
                <br />
                <br />
                Estou sempre à disposição para ajudar ou criar novas soluções
                utilizando tecnologia.
              </p>
            </div>
          </div>
          <div className="h-[70vh] w-full mt-16 sm:mt-24">
            <h2 className="text-left font-semibold text-zinc-300 text-3xl mb-6">
              Carreira
            </h2>
            <div className="h-[40vh]">
              <JobItem
                linkTo="https://www.netwall.com.br/"
                jobTitle="Analista de Suporte"
                companyName="NetWall"
                location="Remoto"
                startDate="mar 2024"
                endDate="Momento"
              />

              <JobItem
                linkTo="https://www.instagram.com/eeepgerardojose/related_profiles/"
                jobTitle="Analista de Sistemas"
                companyName="EEEP Gerardo J. D. Loiola"
                location="Remoto"
                startDate="mar 2023"
                endDate="abril 2024"
              />

              <JobItem
                linkTo="https://grendene.com.br/"
                jobTitle="Analista de BI"
                companyName="Grendene"
                location="Presencial"
                startDate="set 2023"
                endDate="dez 2023"
              />
            </div>
          </div>
          <ContactSection />
        </div>
      </CenteredLayout>
    </>
  );
}

export default About;
