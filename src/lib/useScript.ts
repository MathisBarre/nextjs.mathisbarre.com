
import { useEffect, useState } from "react";

interface useScriptProps {
  url: string,
  theme: string,
  issueTerm: string,
  repo: string,
  ref: any,
  label: string
}

const useScript = ({ url, theme, issueTerm, repo, ref, label }: useScriptProps) => {

  const [status, setStatus] = useState(url ? "loading" : "idle");

  // run the useEffect when the url of the script changes
  useEffect(() => {
      if (!url) {
        setStatus("idle");
        return;
      }

      let script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("theme", theme);
      script.setAttribute("issue-term", issueTerm);
      script.setAttribute("repo", repo);
      script.setAttribute("label", label);

      // Add script to document body
      console.log("foo !")
      ref.current.appendChild(script);

      // store status of the script

      const setAttributeStatus = (event: any) => {
        /**
         * Console.log value from event
            {
                bubbles: false
                cancelBubble: false
                cancelable: false
                composed: false
                currentTarget: null
                defaultPrevented: false
                eventPhase: 0
                isTrusted: true
                path: [script]
                returnValue: true
                srcElement: null
                target: null
                timeStamp: 276483.5
                type: "load"
            }

            based on the type property we will get know whether script is ready or errored out
            */

        setStatus(event.type === "load" ? "ready" : "error");

      };

      script.addEventListener("load", setAttributeStatus);
      script.addEventListener("error", setAttributeStatus);

      return () => {
       // useEffect clean up
        if (script) {
          script.removeEventListener("load", setAttributeStatus);
          script.removeEventListener("error", setAttributeStatus);
          // ref.current.removeChild(script);
        }
      };

  }, []);
  return status;
};

export default useScript;
