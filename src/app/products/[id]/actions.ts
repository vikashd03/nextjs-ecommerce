"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const productInCart = cart.items.find((item) => item.productId === productId);

  if (productInCart) {
    await prisma.cartItem.update({
      where: { id: productInCart.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        CartId: cart.id,
        productId,
        quantity: 1,
      },
    });
  }

  revalidatePath("/products/[id]");
}
