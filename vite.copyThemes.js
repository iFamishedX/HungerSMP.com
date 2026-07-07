import fs from "fs";
import path from "path";

export default function copyIfamishedThemes() {
  return {
    name: "copy-ifamished-themes",
    buildStart() {
      const src = path.resolve(
        "node_modules/ifamished-ui/styles/themes"
      );
      const dest = path.resolve("public/themes");

      if (!fs.existsSync(src)) {
        console.warn("[ifamished-ui] No themes found to copy.");
        return;
      }

      fs.rmSync(dest, { recursive: true, force: true });
      fs.mkdirSync(dest, { recursive: true });

      function copyRecursive(srcDir, destDir) {
        fs.mkdirSync(destDir, { recursive: true });

        for (const item of fs.readdirSync(srcDir)) {
          const srcPath = path.join(srcDir, item);
          const destPath = path.join(destDir, item);

          if (fs.lstatSync(srcPath).isDirectory()) {
            copyRecursive(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      }

      copyRecursive(src, dest);

      console.log("[ifamished-ui] Themes copied → /public/themes/");
    },
  };
}
