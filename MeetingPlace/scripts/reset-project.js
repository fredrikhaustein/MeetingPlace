#!/usr/bin/env node

/**
 * This script is used to reset the project to a blank state.
 * It moves the /app directory to /app-example and creates a new /app directory with an index.tsx and _layout.tsx file.
 * You can remove the `reset-project` script from package.json and safely delete this file after running it.
 */

const fs = require("fs").promises;
const fsExtra = require("fs-extra"); // Requires fs-extra package, run 'npm install fs-extra'
const path = require("path");

const root = process.cwd();
const oldDirPath = path.join(root, "app");
const newDirPath = path.join(root, "app-example");
const newAppDirPath = path.join(root, "app");

const indexContent = `import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
`;

const layoutContent = `import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
`;

async function resetProject() {
  try {
    // Remove app-example if it exists
    await fs.rm(newDirPath, { recursive: true, force: true });
    console.log(`Existing ${newDirPath} removed.`);

    // Copy contents of app to app-example
    await fsExtra.copy(oldDirPath, newDirPath);
    console.log("Copied /app to /app-example.");

    // Remove the original app directory
    await fs.rm(oldDirPath, { recursive: true, force: true });
    console.log("Original /app directory removed.");

    // Create a new /app directory
    await fs.mkdir(newAppDirPath, { recursive: true });
    console.log("New /app directory created.");

    // Write index.tsx file
    const indexPath = path.join(newAppDirPath, "index.tsx");
    await fs.writeFile(indexPath, indexContent);
    console.log("Created app/index.tsx.");

    // Write _layout.tsx file
    const layoutPath = path.join(newAppDirPath, "_layout.tsx");
    await fs.writeFile(layoutPath, layoutContent);
    console.log("Created app/_layout.tsx.");
  } catch (error) {
    console.error(`Error resetting project: ${error.message}`);
  }
}

resetProject();
