import Layout from "../components/layouts/article";
import THREEDContainer from "../components/container-3d";
import Projects from "../components/pages/projects/projects";
import MotionComponent from "../components/motionComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Projetos = () => (
  <Layout title="Projetos">
    <MotionComponent>
      <Projects></Projects>
    </MotionComponent>
  </Layout>
);

// export default function Home...
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "projects",
        "index",
        "navbar",
      ])),
      // Will be passed to the page component as props
    },
  };
}

export default Projetos;
