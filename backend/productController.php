<?php
require_once 'db.php';

function getProducts()
{
    global $pdo;
    $stmt = $pdo->query("SELECT * FROM products");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}

function createProduct()
{
    global $pdo;
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data || empty($data['name']) || $data['price'] <= 0) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid input"]);
        return;
    }
    $stmt = $pdo->prepare("INSERT INTO products (name, price) VALUES (?, ?)");
    $stmt->execute([$data['name'], $data['price']]);
    echo json_encode(["id" => $pdo->lastInsertId()]);
}

function updateProduct($id)
{
    global $pdo;
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data || empty($data['name']) || $data['price'] <= 0) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid input"]);
        return;
    }
    $stmt = $pdo->prepare("UPDATE products SET name = ?, price = ? WHERE id = ?");
    $stmt->execute([$data['name'], $data['price'], $id]);
    echo json_encode(["updated" => true]);
}

function deleteProduct($id)
{
    global $pdo;
    $stmt = $pdo->prepare("DELETE FROM products WHERE id = ?");
    $stmt->execute([$id]);
    echo json_encode(["deleted" => true]);
}
