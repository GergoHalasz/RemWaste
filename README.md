# Skip Size Selector - React + MUI + Framer Motion  

## 📌 Overview  
This project is a **skip size selection UI** built using **React**, **Material-UI (MUI)**, and **Framer Motion** for animations. The interface allows users to select a skip based on its size, hire period, and price while handling conditions like heavy waste restrictions and on-road permissions.

---

## 🛠 Tech Stack  
- **React**: Component-based architecture for building UI  
- **Material-UI (MUI)**: Provides a clean and customizable design  
- **Framer Motion**: Adds smooth animations for a better user experience  
- **TypeScript**: Ensures type safety and improves maintainability  

---

## 🎨 UI Design Approach  
- **MUI Box & Card Components**: Used for structuring the UI with consistent styling  
- **Framer Motion**: Smooth fade-in effects when components load  
- **Conditional Styling**:  
  - Skips that don't allow heavy waste are **grayed out** and **unclickable**  
  - Private property-only skips show a **warning badge**  
  - Selected skips have a **highlighted effect** with a **glow shadow**  

---

## ⚙️ Component Breakdown  

### 1️⃣ `SkipSizeCard.tsx`  
- Displays **skip size, hire period, and price**  
- Uses **MUI Card** with hover and selection effects  
- Handles **conditional rendering** for restricted skips  

### 2️⃣ `SkipBadge.tsx`  
- Displays **warnings** (e.g., "Not Suitable for Heavy Waste")  
- Uses **MUI Box** with icons from `@mui/icons-material`  

### 3️⃣ `SkipPrice.tsx`  
- Formats and **calculates the total price** with VAT  
- Ensures correct rounding  

### 4️⃣ `SelectButton.tsx`  
- Custom **MUI Button**  
- Disables selection for **restricted skips**  
- Uses `textTransform: "capitalize"` to ensure button text formatting  

---

## 🚀 Key Features  
✅ **Responsive Design** (MUI grid & flexbox)  
✅ **Hover & Selection Effects** (Framer Motion animations)  
✅ **Dynamic Button States** (Disabled for restricted skips)  
✅ **Scalable Component-Based Architecture**  

### ✨ Developed by [Gergo Halasz]  
