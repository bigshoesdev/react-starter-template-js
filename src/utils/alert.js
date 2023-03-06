import Swal from "sweetalert2";

export function showError(text) {
  Swal.fire({
    text,
    icon: "error",
  });
}

export function showWarning(text) {
  Swal.fire({
    text,
    icon: "warning",
  });
}

export function showSuccess(text) {
  Swal.fire({
    text,
    icon: "success",
  });
}
