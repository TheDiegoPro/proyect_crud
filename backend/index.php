<?php

require 'db.php';
require 'productController.php';

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'create':
        createProduct();
        break;

    case 'read':
        getProducts();
        break;

    case 'delete':
        $id = $_GET['id'] ?? null;
        if ($id) deleteProduct($id);
        break;

    case 'update':
        $id = $_GET['id'] ?? null;
        if ($id) updateProduct($id);
        break;


    default:
        http_response_code(404);
        echo json_encode(['error' => 'Acción no válida']);
}
