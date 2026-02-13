# File Size Validator

A clean, functional React component that provides client-side file validation. This component ensures that user uploads meet specific size requirements before proceeding, saving server bandwidth and providing immediate user feedback.

## ✨ Features

- **Size Filtering**: Restricts files to a specific range (1MB - 5MB).
- **Dynamic UI**: The action button toggles between `VALIDATE` and `UPLOAD` based on the file status.
- **Instant Feedback**: Clear error messages for "too small," "too large," or "missing file" scenarios.
- **State Cleanup**: Automatically clears previous errors when a new file is selected.

## 🚀 How It Works

The component uses the HTML5 File API to access the file's size in bytes. The validation logic converts bytes to Megabytes (MB) for comparison:

$$fileSizeMB = \frac{file.size}{1024 \times 1024}$$

### Validation Rules

| Scenario          | Criteria    | Feedback                    |
| :---------------- | :---------- | :-------------------------- |
| **Under Minimum** | < 1 MB      | "File is too small..."      |
| **Over Maximum**  | > 5 MB      | "File is too large..."      |
| **Optimal**       | 1 MB - 5 MB | "File is ready for upload!" |
| **No Selection**  | Null        | "Please choose a file"      |

## 🛠️ Installation & Usage

1. **Copy the component** into your project (e.g., `src/components/FileSizeValidation.jsx`).
2. **Import and use it** in your main application:

```jsx
import FileSizeValidation from "./components/FileSizeValidation";

function App() {
  return (
    <div className="App">
      <FileSizeValidation MIN_SIZE_MB={1} MAX_SIZE_MB={5} />
    </div>
  );
}
```
