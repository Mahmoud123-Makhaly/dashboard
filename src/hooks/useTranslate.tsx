import { useTranslations } from "next-intl";

const useTranslate = (nameSpace: string) => {
  return useTranslations(nameSpace || "Index");
};

export default useTranslate;
