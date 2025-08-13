type CustomButtonProps = {
  variant?: "primary" | "outline";
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
};

export default function CustomButton({
  variant = "primary",
  type = "button",
  className,
  children,
}: CustomButtonProps) {
    function getStyles() {
        switch (variant) {
            case "primary":
                return ``
        }
    }

    return (
        <button></button>
    )
}
