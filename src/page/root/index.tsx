import { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../../components/layout";
import Content from "../../components/layout/content";
import styles from "./styles.module.css";

export default function RootPage(): JSX.Element {
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState<String>("");

  useEffect(() => {
    handleNavigate(tabActive as string);
  }, [tabActive]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleNavigate = useCallback(
    (url: string) => {
      navigate(url, { replace: true });
    },
    [navigate]
  );
  return (
    <div className={`${styles.layout}`}>
      <SideBar tabActive={tabActive as string} onClickTab={setTabActive} />
      <Content>
        <Outlet/>
      </Content>
    </div>
  );
}
