import { NextRequest, NextResponse } from "next/server";
import  { connectDB } from "@/src/app/lib/connectDB"; // Ensure the module '@/app/api/connectDB' exists and is correctly exported. If the issue persists, verify the path and module resolution settings in your TypeScript configuration (tsconfig.json).
import Book from "../models/Book";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// ✅ GET all books
export async function GET() {
  try {
    await connectDB();
    const books = await Book.find({});
    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 });
  }
}

// ✅ POST - Create new book WITH IMAGES
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();

    const bookName = formData.get("bookName") as string;
    const authorName = formData.get("authorName") as string;
    const description = formData.get("description") as string;
    const mrpPrice = Number(formData.get("mrpPrice"));
    const salePrice = Number(formData.get("salePrice"));
    const status = formData.get("status") as "draft" | "active";

    const image1 = formData.get("image1") as File;
    const image2 = formData.get("image2") as File;

    if (!image1 || !image2) {
      return NextResponse.json(
        { error: "Both images are required" },
        { status: 400 }
      );
    }

    // 📂 Upload directory
    const uploadDir = path.join(process.cwd(), "public/uploads/books");
    await mkdir(uploadDir, { recursive: true });

    // 🖼 Save images
    const image1Name = `${Date.now()}-${image1.name}`;
    const image2Name = `${Date.now()}-${image2.name}`;

    await writeFile(
      path.join(uploadDir, image1Name),
      Buffer.from(await image1.arrayBuffer())
    );

    await writeFile(
      path.join(uploadDir, image2Name),
      Buffer.from(await image2.arrayBuffer())
    );

    // 💾 Save to DB
    const newBook = await Book.create({
      bookName,
      authorName,
      description,
      mrpPrice,
      salePrice,
      status,
      image1: `/uploads/books/${image1Name}`,
      image2: `/uploads/books/${image2Name}`,
    });

    return NextResponse.json(
      { success: true, book: newBook },
      { status: 201 }
    );

  } catch (error) {
    console.error("POST /api/books error:", error);
    return NextResponse.json(
      { error: "Failed to create book" },
      { status: 500 }
    );
  }
}

// ✅ PUT - Update book
export async function PUT(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Book ID required" }, { status: 400 });
    }

    const updateData = await request.json();
    const updatedBook = await Book.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedBook) {
      return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    return NextResponse.json(updatedBook);
  } catch {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// ✅ DELETE book
export async function DELETE(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Book ID required" }, { status: 400 });
    }

    await Book.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
