import type { Metadata } from "next";
import ContatoClient from "./ContatoClient";

export const metadata: Metadata = {
  title: "Axion Systems | Contato",
  description:
    "Entre em contato com a Axion Systems para solicitar uma demonstração ou conversar sobre o seu projeto.",
};

export default function ContatoPage() {
  return <ContatoClient />;
}
